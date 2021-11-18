import React, {} from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'
import useAuth from './../AuthProvider/UseAuth';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const{handleRegister}=useAuth();
    
    const onSubmit = (data)=>{
         console.log(data);
         handleRegister(data.email,data.password,data.name)
        }

    

    return (
        <div>
         <h2>Register page</h2>
      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='name'/>
      <input type='email' {...register("email" )}  placeholder='Email'/>
      <input  type="password" {...register("password")} placeholder='Password'/>
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