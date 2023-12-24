import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [looding, setLooding] = useState(true)

    const creatUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUaser = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLooding(true)
        return signInWithPopup(auth, googleProvider)

    }
    const logOutUser = () => {
        setLooding(true)
        signOut(auth)
    }
    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLooding(false)
            console.log(currentUser);
          });
        return () => {
            return unSubscrib()
        }
    },[])
    const authInfo = {
        creatUser,
        loginUaser,
        logOutUser,
        googleLogin,
        looding,
        user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;