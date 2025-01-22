import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const emailSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // const updateUser = (name, photo) => {
  //   setLoading(true);
  //   return updateProfile(user, {
  //     displayName: name,
  //     photoURL: photo,
  //     badge: "bronge",
  //   });
  // };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        // console.log(user);
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    emailSignUp,
    user,
    logIn,
    googleSignIn,
    githubSignIn,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
