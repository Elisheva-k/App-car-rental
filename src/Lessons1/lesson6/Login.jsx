import { useState } from "react"
import swal from "sweetalert"
// npm i sweetalert

export const Login = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const send = () => {
        // יצרית אובייקט שיכיל את הערכים שהוזנו בפקדים
        const user = {
            // אם שמות המשתנים זהים לשמות המפתחות 
            // מספיק לכתוב רק פעם אחת
            // username: username,
            // email: email,
            // password: password
            username,
            email,
            password
        }
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
            onBlur={(e) => setUsername(e.target.value)}></input><br></br>

        <label>email:</label><br></br>
        <input placeholder="input email"
            onBlur={(e) => setEmail(e.target.value)}></input><br></br>

        <label>password:</label><br></br>
        <input type="password" placeholder="input password"
            onBlur={(e) => setPassword(e.target.value)}></input><br></br>

        <br></br>
        <button onClick={send}>send</button>
    </>
}