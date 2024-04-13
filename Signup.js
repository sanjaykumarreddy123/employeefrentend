import React, { useState } from "react";

const  Signup=(props)=>{
    const [fname, setFname] = useState("");
    const [sname, setSname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [mobial, setMobial] = useState("");
    const [dob, setDob] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (fname === "Kavyesh" && pwd === "1234589") {
            alert("User authenticated successfully");
        } else {
            alert("Invalid credentials");
        }
    };
    

    return ( <div className="container" >
            <form className="form-group" onSubmit={handleSubmit}>
                <label htmlFor="fname" className="col-form-label">First Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={(e)=>setFname(e.target.value)}
                /><br />
                <label htmlFor="sname" className="col-form-label">Second Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="sname"
                    id="sname"
                    value={sname}
                    onChange={(e)=>setSname(e.target.value)}
                /><br />
                <label htmlFor="email" className="col-form-label">Email:</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="password"className="col-form-label">Password:</label>
                <input
                    className="form-control"
                    type="password"
                    name="pwd"
                    id="pwd"
                    value={pwd}
                    onChange={(e)=>setPwd(e.target.value)}
                    placeholder="Enter the password"
                />
                <label htmlFor="mobial" className="col-form-label">Mobile:</label>
                <input
                    className="form-control"
                    type="number"
                    name="mobial"
                    id="mobial"
                    value={mobial}
                    onChange={(e)=>setMobial(e.target.value)}
                />
                <label htmlFor="dob" className="col-form-label">Date of Birth:</label>
                <input
                    className="form-control"
                    type="date"
                    name="dob"
                    id="dob"
                    value={dob}
                    onChange={(e)=>setDob(e.target.value)}
                />
                <label htmlFor="brach" className="col-form-label">Branch:</label>
                <select name="brach" id="brach">
                    <option value="a1">CSE</option>
                    <option value="a2">ECE</option>
                    <option value="a3">EEE</option>
                    <option value="a4">IT</option>
                </select>
                
                <button className="btn btn-primary" type="submit" name="submit" id="submit">Submit</button>
            </form>
        </div>
    );
};


export default Signup
