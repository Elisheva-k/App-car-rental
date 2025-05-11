import { useState } from "react";
import swal from "sweetalert"
// npm i sweetalert
import './style.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/Action";

export const Login = () => {

    const [user, setUser] = useState({})

    // selector - שליפת משתנים גלובליים מתוך הסטייט
    const users = useSelector(store => store.users)

    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()

    // יצירת משתנה שמנתב למקום אחר
    const navigate = useNavigate()


    const send = () => {

        console.log(user);
        let arr = users.filter(x => x.email == user.email && x.password == user.password)

        if (arr.length > 0) {
            // שמירת המשתמש במשתמש הנוכחי של הסטייט
            dispatch(setCurrentUser(arr[0]))
            swal(`Hello ${arr[0].username}!`, "login successfuly!", 'success')
            navigate('/home')
        }
        else {
            swal(`Oopps!`, "login failed! user does not exists", 'error')
        }

    }
    return <>
        <h2>Login:</h2>
        <label>email:</label>
        <br></br>
        <input placeholder="input email"
            onBlur={(e) => setUser({ ...user, email: e.target.value })}></input>
        <br></br>

        <label>password:</label>
        <br></br>
        <input placeholder="input password"
            onBlur={(e) => setUser({ ...user, password: e.target.value })}></input>
        <br></br>

        <button onClick={send}>send</button>
    </>
}