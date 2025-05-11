import { useState } from "react";
import swal from "sweetalert";

export const Form = () => {

    const [errors, setErrors] = useState({})

    const checkName = (value) => {
        let nameRegex = /^[א-תA-Z]\w[a-zA-Zא-ת]{1,20}$/
        // match
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'שם חייב להכיל אותיות בלבד באורך של 2 - 20 תווים!' })
        }
        else {
            setErrors({ ...errors, username: '' })
        }
    }

    const checkEmail = (value) => {
        // /regex/i.test(value)
        if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i.test(value)) {
            setErrors({ ...errors, email: 'אימייל לא תקין!' })
        }
        else {
            setErrors({ ...errors, email: '' })
        }
    }

    const checkPass = value => {
        if (value.length < 4) {
            setErrors({ ...errors, password: 'סיסמה קצרה מידי' })
        }
        else if (value.length > 16) {
            setErrors({ ...errors, password: 'סיסמה ארוכה מידי' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }

    const send = (event) => {
        // כברירת מחדל - אירוע סבמיט מחפש ניתוב לעבור אליו
        // אם הוא לא מוצא מנתב לסימן שאלה
        // כיון שאין ניתוב כזה הדף מתרנדר מחדש ולא קורה מה שרצינו בפונקציה
        // לשם כך נבטל את ברירת המחדל ע"י הפקודה הבאה
        event.preventDefault();

        console.log(event);

        const user = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }

        swal(`Hello ${user.username}`, 'login successfully!', 'success')
    }

    return <>
        <h4>Login</h4>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor="username">user name:</label><br></br>
            <input id="username" placeholder="input username" onChange={(e) => checkName(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.username}</p>

            <label htmlFor="email">email:</label><br></br>
            <input id="email" placeholder="input email" onChange={(e) => checkEmail(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.email}</p>

            <label htmlFor="password">password:</label><br></br>
            <input id="password" type="password" placeholder="input password" onChange={(e) => checkPass(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.password}</p>

            <input type={'submit'}></input>
        </form>
    </>
}