import React, { useContext } from 'react'
import { UserContext } from './UserContext';



// const User = () => {
//     const userContext = useContext(UserContext);

//     const handleLogin = ()=>{
//         if(userContext) {
//             userContext.setUser({
//                 name:"razique",
//                 email: "mail4razique@gmail.com"
//             })
//         }
//     }
//     const handleLogout = ()=>{
//         if(userContext){
//             userContext.setUser(null)
//         }
//     }

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>User Name is {userContext?.user?.name}</div>
//       <div>User Email is {userContext?.user?.email}</div>
//     </div>
//   )
// }

// export default User






const User = () => {
    const userContext = useContext(UserContext);
    
    const handleLogin = ()=>{

            userContext.setUser({
                name:"razique",
                email: "mail4razique@gmail.com"
            })
    }

    const handleLogout = ()=>{

            userContext.setUser(null)
    }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name is {userContext.user?.name}</div>
      <div>User Email is {userContext.user?.email}</div>
    </div>
  )
}

export default User

