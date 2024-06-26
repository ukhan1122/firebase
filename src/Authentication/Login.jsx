import React, { useState, useTransition } from "react";
import {auth} from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";

const Login = () =>{
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const[loading,setloading] = useState(false)
    const navigate = useNavigate()


    const handlesignin =  async(e) =>{
        e.preventDefault()
        setloading(true)
        try {
            await signInWithEmailAndPassword(auth,email,password)
            
            navigate('/')
            console.log("login successfull")
        } catch (error) {
            console.log('error while login', error)
        }finally{
            setloading(false)
        }


    }

    return(
        <div>
             <form onSubmit={handlesignin}>
                <h2>Login Form</h2>
                <div>
                <label htmlFor="">Email</label>
                <input type="text"  placeholder="enter your email"
                onChange={(e)=>setemail(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="enter your password" 
                onChange={(e)=>setpassword(e.target.value)}
                />
         
                <button type="submit" >
                    {loading ? 'Laoding...' : 'Login'}
                    </button>
                </div>
                <span>Have't account ? <Link to="/Signup">Signup</Link> </span>
                     </form>
        </div>
    )
}
export default Login;