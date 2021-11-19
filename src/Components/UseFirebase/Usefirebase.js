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
const [isloading,setIsloading]=useState(true)
const googleProvider =new GoogleAuthProvider();
const auth =getAuth();

const signInGoogle =(location,history)=>{
      setIsloading(true)
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            history.push(location?.state?.from || '/') 
        })
        .catch(error=>{
          console.log(error.message);
        })
        .finally(()=>setIsloading(false));
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
        setIsloading(false)
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
   
   const handleLogin =(email,password,location,history)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const destination = location?.state?.from || '/';
      history.replace(destination);
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
    handleRegister,
    isloading
} 

}

export default useFirebase;