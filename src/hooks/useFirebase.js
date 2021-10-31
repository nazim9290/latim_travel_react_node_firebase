import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebaseConfig/initializeFirebase";

initialization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //provider
  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();

  //auther
  const auth = getAuth();

  const googleLogin = (provider) => {
    // setIsLoading(true);

    return (
      signInWithPopup(auth, provider)
        // .then(result=>{
        //     const {displayName,email,photoURL}=result.user;
        //     const userInfo={
        //         name:displayName,
        //         email:email,
        //         img: photoURL
        //     }
        //     setUser(userInfo)
        //     console.log(userInfo);
        // })
        .finally(() => setLoading(false))
    );
  };

  // const githubLogin=()=>{

  //     signInWithPopup(auth, githubprovider)
  //     .then(result=>{
  //         const {displayName,email,photoURL}=result.user;
  //         const userInfo={
  //             name:displayName,
  //             email:email,
  //             img: photoURL
  //         }
  //         setUser(userInfo)
  //         console.log(userInfo);
  //     })
  //     .finally(() => setIsLoading(false));
  // }

  const logOut = () => {
    setLoading(false);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return {
    user,
    googleLogin,
    // githubLogin,
    googleprovider,
    githubprovider,
    logOut,
    setUser,
    loading,
    handleUserRegister,
    handleUserLogin,
    setLoading,
    error,
  };
};
export default useFirebase;
