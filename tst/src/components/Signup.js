import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate=useNavigate("")

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  })

  const handleClick =async () => {
    console.log(name,email,pass)
    let result=await fetch("http://localhost:5000/register",{
      method:"post",
      body:JSON.stringify({name,email,pass}),
      headers:{
        "Content-Type":"application/json"
      }
    });

    result=await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate("/")
  };
  return (
    <div className="signup">
      <h1>Register</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="inputbox"
        type="text"
        placeholder="Enter name"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="inputbox"
        type="email"
        placeholder="Enter email"
      />
      <input
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        className="inputbox"
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={handleClick} type="button">
        Signup
      </button>
    </div>
  );
};
export default Signup;
