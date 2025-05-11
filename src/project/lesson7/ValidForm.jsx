import { useState } from "react";
import swal from "sweetalert"
// npm i sweetalert
import './style.css'
import { useNavigate } from "react-router-dom";

export const ValidForm = () => {

    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

    // יצירת משתנה שמנתב למקום אחר
    const navigate = useNavigate()

    const users = [
        { username: 'Avigail', email: 'avi6009@gmail.com', password: '6009' },
        { username: 'Chedvi', email: 'c4039@gmail.com', password: '4039' },
        { username: 'Chani', email: 'chani8621@gmail.com', password: '8621' },
        { username: 'Malki', email: 'm5711@gmail.com', password: '5711' },
        { username: 'Shulamit', email: 'shb7101@gmail.com', password: '7101' },
        { username: 'Brachi', email: 'b5222@gmail.com', password: '5222' }
    ]

    const checkName = (value) => {
        const nameRegex = /^[A-Z]\w[a-zA-Z]{1,20}$/
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'invalid name!' })
        }
        else {
            setErrors({ ...errors, username: '' })
        }
    }
    const checkEmail = (value) => {
        // /regex/i.test(value)
        if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i.test(value)) {
            setErrors({ ...errors, email: 'invalid email!' })
        }
        else {
            setErrors({ ...errors, email: '' })
        }
    }
    const checkPassword = (value) => {
        if (value.length < 4 || value.length > 16) {
            setErrors({ ...errors, password: 'password length must be between 4 and 16' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }

    const send = () => {

        console.log(user);
        let arr = users.filter(x => x.email == user.email && x.password == user.password)

        if (arr.length > 0) {
            swal(`Hello ${arr[0].username}!`, "login successfuly!", 'success')
            // navigate -> welcome
            // ניתוב לאח - עם סלש
            // ניתוב לבן - בלי סלש
            navigate(`/welcome/${user.username}/${user.password}`)
        }
        else {
            swal(`Oopps!`, "login failed! user does not exists", 'error')
        }

    }
    return <>
        <h2>Login:</h2>
        <label>username:</label>
        <br></br>
        <input placeholder="input name"
            // פונקציה שמופעלת בעת כל שינוי בפקד - בודקת אם הערך המוזן תקין
            onChange={(e) => checkName(e.target.value)}
            // פונקציה שמופעלת בעת עזיבת הפקד ומציבה במשתמש את שם המשתמש שהוזן
            onBlur={(e) => setUser({ ...user, username: e.target.value })}></input>

        <br></br>
        <p className="error">{errors.username}</p>

        <label>email:</label>
        <br></br>
        <input placeholder="input email"
            onBlur={(e) => setUser({ ...user, email: e.target.value })}
            onChange={(e) => checkEmail(e.target.value)}></input>
        <br></br>
        <p className="error">{errors.email}</p>

        <label>password:</label>
        <br></br>
        <input placeholder="input password"
            onBlur={(e) => setUser({ ...user, password: e.target.value })}
            onChange={(e) => checkPassword(e.target.value)}></input>
        <br></br>
        <p className="error">{errors.password}</p>

        <button onClick={send}>send</button>
    </>
}