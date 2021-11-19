import React from 'react';
import { useForm } from "react-hook-form";
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from './../AuthProvider/UseAuth';
import { useState } from 'react';

const Login = () => {
    const { register, handleSubmit} = useForm();
    const {signInGoogle,handleLogin}=useAuth();
    
    const location = useLocation();
    const history = useHistory()
    
    const onSubmit = data =>{ 
        console.log(data);
        handleLogin(data.email,data.password,location,history)
    }
  
  
    return (
        <div>
            <h2>login page</h2>
     <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
           <input type='email' {...register("email" )}  placeholder='Email'/>
           <input  type="password" {...register("password")} placeholder='Password'/>
           <input className='btn-size' type="submit" />
      </form>
      <div>
          <h6>NewUser 
              <Link to='/register'>Register</Link>
          </h6>
          <button onClick={()=> signInGoogle(location,history)} className='btn btn-primary'>SignIn Google</button>
      </div>
        </div>
    );
};

export default Login;