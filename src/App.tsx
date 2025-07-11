import React, { use, useState } from 'react';
import './App.css';
import Login from './login';

const MainPage: React.FC = () => {

  const [add,setAdd] = useState<string[]>([]);

     const [message,setMessage] = useState<string[]>([])
     


     const enterKey = (event: React.KeyboardEvent<HTMLInputElement>,keyInput:string) => {

      if (event.key == 'Enter'){

        setMessage([...message,keyInput]);



      }

     }
    return (
        <div className="main">
            <div className='title'>
                Friends
            </div>

            <div>

                <div className="app-root">
    
    
    <aside className="sidebar servers">
      <div className="server-icon">D</div>
      <hr />
      <div className="server-icon">F</div>
      <div className="server-icon">R</div>
      <div className="server-icon">D</div>
      <div className="server-icon">F</div>
      <div className="server-icon">R</div>
      <div className="server-icon">D</div>
      <div className="server-icon">F</div>
      <div className="server-icon">R</div>
      
      {add.map((add, index) => (
  <div className="server-icon" key={index}>{add}</div>
))}

<div className='server-icon' onClick={() => setAdd([...add, `R`])} id="AddServer">+</div>

    </aside>

    <aside className="sidebar channels">
      <div className="channels-header">
        <span className="channel-tag">Direct Messages</span>
        <button className="add-dm">+</button>
      </div>
      <div className="friends-list">
        <div className="friend">Alice</div>
        <div className="friend">Bob</div>
        <div className="friend">Charlie</div>
      </div>
    </aside>

    <main className="chat">
      <header className="chat-header">
        <div className="chat-title">Select a DM</div>
      </header>
      <div className="chat-messages">
          {message.map((message, index) => (
          <div className="chatText" key={index}>{message}</div>
           ))}
      </div>
      <div className="chat-input">
        <button className="btn-emoji">😊</button>
        <input className="input-message" placeholder="Message #alice-and-bob" onKeyDown={(e) => enterKey(e,e.currentTarget.value)} />
        <button className="btn-upload">📎</button>
      </div>
    </main>
  </div>
            </div>

           

        </div>
  )
}



const App: React.FC = () => {

  const [userData,setUser] = useState<String>()
  const [isLoggedin,setLogin] = useState<boolean>(true)

  const loggedIn = (userData:String) => {
    setUser(userData)
    setLogin(true)
  }



  



  return(
    <>

    {
      (isLoggedin!)?(
        <Login onlogin={loggedIn}></Login>
      ):(
        <App></App>
      )

    }
    
    
    
    </>
    
    
  )
    
     
  

}

export default App;