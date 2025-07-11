import React, { HtmlHTMLAttributes } from "react";
 import "./login.css" 

 interface loginInterface{

    onlogin:(data:String) => void

 }

const Login:React.FC<loginInterface> = ({onlogin}) => { 


    const submitLogin = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        onlogin("Ramzi")


    }
     
    
    return( 

        


        


        <div className="div1">

            <form className="form1" onSubmit={submitLogin}>
                <h1>Welcome Back!</h1>
                <p>We're so excited to see you again!</p>
                <label htmlFor="Email">Email</label>
        <input id="Email" type="field"></input>
        <label htmlFor="Password">Password</label>
        <input id="Password" type="field"></input>
        <button type="submit">Submit</button>
            </form>
            


        </div>
            
        
        

        
            
            
         ) } 

export default Login;