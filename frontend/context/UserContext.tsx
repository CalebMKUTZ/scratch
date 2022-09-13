import { createContext, useEffect, useState } from "react";
import { UserContextProps, UserProviderProps } from "../types";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";

export const UserContext = createContext<UserContextProps>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (response) => {
        if (response.user !== null) {
          await axios.post("http://localhost:3000/auth/user", {
            email: response.user.email,
          });

          setUser(response.user);
          setIsLoggedIn(true);
        }
      })
      .catch((error: any) => {
        setError(error.message);
      });
  };

  const getUserWithPads = async (email: string) => {
    const response = await axios.get(
      `http://localhost:3000/auth/user/${email}`
    );
    setUserData(response.data);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userData,
        isLoggedIn,
        error,
        loginWithGoogle,
        getUserWithPads,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
