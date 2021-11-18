import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile 
   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "./Firebase.init";
firebaseAuthentication();

const useFirebase=()=>{
const [user,setUser]=useState({});
const googleProvider =new GoogleAuthProvider();
const auth =getAuth();

    const signInGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
        })
    }

  const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
  }

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });
    },[])

  const handleRegister =(email,password,name)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setUser(result.user)
      userName(name);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
   
   const handleLogin =(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setUser(result.user)
    })
    .catch(error=>{
      console.log(error.message);
    })
   }

  const userName=(name)=>{
    updateProfile (auth.currentUser,{
      displayName:name
    })
    .then(()=>{

    })
    .catch(error=>{
      console.log(error.message);
    })
  }

return{
    user,
    signInGoogle,
    logout,
    handleLogin,
    handleRegister
} 

}

export default useFirebase;