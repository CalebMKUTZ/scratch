import { createContext, useEffect, useState } from "react";
import { UserContextProps, UserProviderProps } from "../types";
import { auth } from "../firebase";
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";
import { saveUserToDatabase } from "../utils/saveUserToDatabase";

export const UserContext = createContext<UserContextProps>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());

    if (getAdditionalUserInfo(response).isNewUser) {
      await saveUserToDatabase(response.user.email);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        error,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
