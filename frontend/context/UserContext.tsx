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
import { saveUserToDatabase } from "../utils/saveUserToDatabase";

export const UserContext = createContext<UserContextProps>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());

      if (getAdditionalUserInfo(response).isNewUser) {
        await saveUserToDatabase(response.user.email);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
