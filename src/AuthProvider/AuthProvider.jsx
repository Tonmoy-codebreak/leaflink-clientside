import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  
    const resetPass = (email) =>{
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const onAuthChecker = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      onAuthChecker();
    };
  }, []);

  const value = {
    user,
    setUser,
    createUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
    loading,
    setLoading,
    resetPass,
    
  };

 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
