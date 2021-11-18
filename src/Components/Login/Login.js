import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from './../AuthProvider/UseAuth';
import { useState } from 'react';
const Login = () => {
    const { register, handleSubmit,handleLogin } = useForm();
    const {user, signInGoogle}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const onSubmit = data =>{ 
        console.log(data);
        handleLogin(email,password)
    }
  
   const handleEmail=(e)=>{
       setEmail(e.target.value)
   }

   const handlePassword=(e)=>{
    setPassword(e.target.value)
    }

    return (
        <div>
            <h2>login page</h2>
     <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
           <input type='email' {...register("email" )} onClick={handleEmail} placeholder='Email'/>
           <input  type="password" {...register("age")}onClick={handlePassword} placeholder='Password'/>
           <input className='btn-size' type="submit" />
      </form>
      <div>
          <h6>NewUser 
              <Link to='/register'>Register</Link>
          </h6>
          <button onClick={signInGoogle} className='btn btn-primary'>SignIn Google</button>
      </div>
        </div>
    );
};

export default Login;