import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const navigate=useNavigate("")

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
          navigate("/")
        }
      })

    const handleClick =async () => {
        console.log(email,pass)
        let result=await fetch("http://localhost:5000/login",{
          method:"post",
          body:JSON.stringify({email,pass}),
          headers:{
            "Content-Type":"application/json"
          }
        });

        result=await result.json()
        console.warn(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        }else{
            alert("enter correct details")
        }

    }
    return(
        <div className="login">
        <h1>Login</h1>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="inputbox" type="email" placeholder=" enter username"></input>
            <input value={pass} onChange={(e)=>{setPass(e.target.value)}}  className="inputbox" type="password"  placeholder=" enter password"></input>
            <button onClick={handleClick} type="button">login</button>
        </div>
    )
}
export default Login;