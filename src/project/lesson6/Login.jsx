import { useState } from "react";
import swal from "sweetalert"
// npm i sweetalert

export const Login = () => {

    // יצרנו משתנה עבור כל אחד מהשדות
    const [name, setName] = useState()
    const [password, setPass] = useState()

    const send = () => {

        const user = {
            username: name,
            password
            // כאשר המפתח והערך זהים, אין צורך לכתוב כפול
            // password: password
        }
        console.log(user);

        swal(`Hello ${user.username}!`, "login successfuly!", 'success')
        // swal("Hello!", "login successfuly!", 'error')
        // swal("Hello!", "login successfuly!", 'info')
    }
    return <>
        <h2>Login:</h2>
        <label>username:</label><br></br>
        {/* בעת עזיבת האלמנט נציב את הערך במשתנה */}
        <input placeholder="input name" onBlur={(e) => setName(e.target.value)}></input><br></br>
        <label>password:</label><br></br>
        <input placeholder="input password" onBlur={(e) => setPass(e.target.value)}></input><br></br>
        <button onClick={send}>send</button>
    </>
}