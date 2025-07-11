import React from "react";
import { useState } from "react";



const Chat:React.FC = () => {

    const [message,setMessage] = useState<string[]>([])
         
    
    
         const enterKey = (event: React.KeyboardEvent<HTMLInputElement>,keyInput:string) => {
    
          if (event.key == 'Enter'){
    
            setMessage([keyInput,...message]);
    
    
    
          }
    
         }

    return(

        <main className="chat">
      

      <div className="chat-message-main">


        <div className="chat-messages">
          {message.map((message, index) => (
          <div className="chatText" key={index}>{message}</div>
           ))}
      </div>


      </div>
      
      <div className='chatOutsideInput'>

        <div className="chat-input">
        <button className="btn-emoji">😊</button>
        <input className="input-message" placeholder="Message #alice-and-bob" onKeyDown={(e) => enterKey(e,e.currentTarget.value)} />
        <button className="btn-upload">📎</button>
      </div>

      </div>
      
    </main>
        
    )

}

export default Chat;

