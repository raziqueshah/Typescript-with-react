import React, { useState } from 'react'

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoggedIn = ()=>{
        setIsLoggedIn(true);
    }

    const handleLoggedOut = () =>{
        setIsLoggedIn(false)
    }

  return (
    <div>
      <button onClick={handleLoggedIn}>LoggedIn</button>
      <button onClick={handleLoggedOut}>LoggedOut</button>
      <div>{ isLoggedIn ? <h1>User is Logged In</h1> : <h1>User is Logged Out</h1>}</div>
    </div>
  )
}

export default LoggedIn
