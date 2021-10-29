import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebaseConfig/initializeFirebase";

initialization();
const useFirebase=()=>{
    const [user,setUser]=useState({})

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const login=()=>{
     return signInWithPopup(auth, provider)
       
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            }).catch((error) => {
            // An error happened.
            });
    }

    //on auth change 
    useEffect(()=>{
                onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            // User is signed out
            setUser({})
        }
        })},[])
    const handlecreatuser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return{
        user,
        login,
        logOut,
        handlecreatuser,
    }
}
export default useFirebase;