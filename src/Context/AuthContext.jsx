import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const FirebaseContext = createContext(null);


const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  //signUp
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //login

  const signIn = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

  //manageUser
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       setUser(user);
      setLoading(false)
   
    });
  }, []);

  //logout

  const logOut = () => {
    setLoading(true)
  return  signOut(auth)
      
  }

  //context value
  const AuthValue = {
    signUp,
    user,
    logOut,
    signIn,
    loading
  }
  return (
    <FirebaseContext.Provider value={AuthValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;