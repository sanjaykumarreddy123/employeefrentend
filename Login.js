import React, {  useState,useRef } from "react";
import { useNavigate } from "react-router";


const Login=()=>{
   const [uname,setUname]=useState("")
   const [pwd,setPwd]=useState("")
   const navigate = useNavigate();

const handleUname=(e)=>{
    setUname(e.target.value)
}

const handlePwd=(e)=>{
    setPwd(e.target.value)
}

const formSubmit=(e)=>{
    e.preventDefault();
    console.log(uname+ " "+pwd)
    if(uname==="sanjay" && pwd==="sanjay")
    navigate("/employeelist")
    else
    alert("Invalid credentials")
}


    return (
        <div className="container col-md-4">
            <h1>EMA-Login</h1>
            <form className="form-group" 
            id="myForm" onSubmit={formSubmit}>
                <label className="form-label" htmlFor="uname">Username</label>
                <input className="form-control" 
                type="text"
                name="uname"
                id="uname"
                 onChange={handleUname}
                placeholder="Enter username"></input>


                <label className="form-label" htmlFor="pwd">Password</label>
                <input className="form-control" 
                 onChange={handlePwd}
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Enter password"></input>

                <p className="mt-3">Don't have an account? <a href="/signup">Sign up</a></p>
                <button className="btn btn-primary" 
                type="submit" >Submit</button>

            
            </form>

            
        </div>
        
    )

    
}
export default Login