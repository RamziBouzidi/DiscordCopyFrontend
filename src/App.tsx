import React, { use, useState } from 'react';
import './App.css';
import Login from './login';
import Chat from './chat'


const MainPage: React.FC = () => {

  const [add,setAdd] = useState<string[]>([]);
  const [activeSection,setActiveSection] = useState<String>("Online")
  

  

    
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
        <div className="friend" onClick={() => setActiveSection("type")}>
          <div className='imageFriend'>
            <img src="malek.png"></img>
          </div>
          <p>malek24996</p>
        </div>
        <div className="friend">
          <div className='imageFriend'>
            <img src="malek.png"></img>
          </div>
          <p>malek24996</p>
        </div>
        <div className="friend">
          <div className='imageFriend'>
            <img src="malek.png"></img>
          </div>
          <p>malek24996</p>
        </div>
      </div>
    </aside>



    <main className="chat">
      <header className="chat-header">
        <button className="header-button" onClick={() => setActiveSection("Home")}>Online</button>
        <button className="header-button">Add Friend</button>
      </header>

      {(activeSection) === 'Home' && (

        <div></div>
      )}
      {(activeSection) === 'type' && (

        <Chat></Chat>
      )}
      
      

      

    </main>
  </div>
            </div>

           

        </div>
  )
}



const App: React.FC = () => {

  const [userData,setUser] = useState<String>()
  const [isLoggedin,setLogin] = useState<boolean>(false)

  const loggedIn = (userData:String) => {
    setUser(userData)
    setLogin(true)
  }



  



  return(
    <>

    {
      (!isLoggedin)?(
        <Login onlogin={loggedIn}></Login>
      ):(
        <MainPage></MainPage>
      )

    }
    
    
    
    </>
    
    
  )
    
     
  

}

export default App;