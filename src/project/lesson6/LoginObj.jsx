import { useState } from "react";
import swal from "sweetalert"
// npm i sweetalert

export const LoginObj = () => {

    const [user, setUser] = useState({})

    const send = () => {

        console.log(user);

        swal(`Hello ${user.username}!`, "login successfuly!", 'success')

    }
    return <>
        <h2>Login:</h2>
        <label>username:</label><br></br>
        <input placeholder="input name" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input><br></br>
        <label>password:</label><br></br>
        <input placeholder="input password" onBlur={(e) => setUser({ ...user, password: e.target.value })}></input><br></br>
        <button onClick={send}>send</button>
    </>
}