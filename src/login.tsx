import React, { HtmlHTMLAttributes } from "react";
 import "./login.css" 

 interface loginInterface{

    onlogin:(data:String) => void

 }

const Login:React.FC<loginInterface> = ({onlogin}) => { 


    const submitLogin = (e:React.FormEvent<HTMLFormElement>) => {


    }
     
    
    return( 

        


        <div className="outsideForm"> 


            <form className="form" onSubmit={submitLogin}></form>
            
        
        <label htmlFor="Email">Email</label>
        <input id="Email" type="field"></input>
        <label htmlFor="Password">Password</label>
        <input id="Password" type="field"></input>
        <button type="submit">Submit</button>

        
            
            
        </div> ) } 

export default Login;