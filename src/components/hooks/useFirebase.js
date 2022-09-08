import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizationAuthentication from "../Firebase/firebase.init";

// firebase init 
initilizationAuthentication()


// google provider 
const googleProvider = new GoogleAuthProvider();

// firebase auth provider 
const auth = getAuth();

const useFirebase = () => {
    // all state declear here 
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // google signin 
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    // log out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }
    return {
        googleSignIn,
        logOut,
        user,
        setUser,
        setIsLoading,
        isLoading
    }
}



export default useFirebase;