import { useState } from "react"


const Register = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    return (
      <div>
          <form className="register">
          <h1>Register</h1>
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button>Register</button>
          </form>
      </div>
    )
  }
  
  export default Register