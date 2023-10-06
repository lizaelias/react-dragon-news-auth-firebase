import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";

export const AuthContext =createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);

    const [loding,setLoding] =useState(true);

    //regiser page
    const createUser =(email,password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login page
    const signIn =(email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password);
        
    }

    const logOut =() =>{
        setLoding(true);
        return signOut(auth);
    }

    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('use in the auth state changed',currentUser);
            setUser(currentUser);
            setLoding(false)
        })
        return ()=>{
            unSubscribe ();

        }

    },[])

    const authInfo ={
        user,
        loding,
        createUser,
        logOut,
        signIn,

    }
    
    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;