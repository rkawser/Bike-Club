import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'
import useAuth from './../AuthProvider/UseAuth';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const{handleRegister}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');

    const onSubmit = ()=>{
         
         handleRegister(email,password,name)
        }

    
   const handleEmail=(e)=>{
       setEmail(e.target.value);
   }
   const handlePassword=(e)=>{
    setPassword(e.target.value);
   }
   
   const displayName=(e)=>{
       setName(e.target.value)
   }

    return (
        <div>
         <h2>Register page</h2>
      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} onClick={displayName} placeholder='name'/>
      <input type='email' {...register("email" )} onClick={handleEmail} placeholder='Email'/>
      <input  type="password" {...register("age")}onClick={handlePassword} placeholder='Password'/>
      <input className='btn-size' type="submit" />
      </form>
      <div>
          <h6>Already Register
              <Link to='/login'>Login</Link>
          </h6>
      </div>
        </div>
    );
};

export default Register;