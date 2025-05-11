import { useState } from "react"
import swal from "sweetalert"
// npm i sweetalert

export const LoginObj = () => {

    const [user, setUser] = useState({})

    const send = () => {
        // הדפסת האובייקט 
        console.log(user);
        swal(`Hello ${user.username}`, 'login successfully!', 'success')
        // swal('Hello', 'login failed!', 'error')
        // swal('Hello', 'login successfully!', 'info')
    }

    return <>
        <h4>Login</h4>
        <label>user name:</label><br></br>
        <input placeholder="input username"
            onBlur={(e) => setUser({ ...user, username: e.target.value })}></input><br></br>

        <label>email:</label><br></br>
        <input placeholder="input email"
            onBlur={(e) => setUser({ ...user, email: e.target.value })}></input><br></br>

        <label>password:</label><br></br>
        <input type="password" placeholder="input password"
            onBlur={(e) => setUser({ ...user, password: e.target.value })}></input><br></br>

        <br></br>
        <button onClick={send}>send</button>
    </>
}