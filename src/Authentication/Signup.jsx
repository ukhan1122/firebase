import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";
import {Link, useNavigate} from "react-router-dom"

const Signup = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [loading ,setloading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      navigate('/login')
      console.log("Signup successful");
    } catch (error) {
      console.error("Error while signup", error);
    }
    finally{
        setloading(false)
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignup}>
        
      <h2>Signup Form</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button type="submit">
            {loading ? "Loading" : "Signup"}
            </button>
        </div>
        <span>already have account ? <Link to="/Login">Login</Link></span>

      </form>
    </div>
  );
};

export default Signup;
