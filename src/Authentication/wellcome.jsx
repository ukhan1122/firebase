 import React from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase";
import image  from "../image/images.png"
const Wellcome = () =>{
    const navigate = useNavigate()

    const Logout = async () =>{
        try {
            await auth.signOut();
            navigate("/login")
            console.log("logout click")
        } catch (error) {
            console.log("error while logout",error)
            
        }

    }

    return(
        <div style={{color:"white", display:"flex", fontSize:"50px"}}>
           
           <h2> Wellcome</h2>
            <h2>       <button
                onClick={Logout}
                style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    color:"white",
                }}
            >
                <img style={{width:"50px",height:"50px ",}} src={image} alt="" />
            </button>
             </h2>

        </div>

       
    )
}
export default Wellcome;