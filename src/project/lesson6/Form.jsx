import { useState } from "react";
import swal from "sweetalert"
// npm i sweetalert

export const Form = () => {

    const [error, setErrors] = useState({})

    const send = (event) => {
        // אירוע סבמיט בברירת מחדל מחפש לנתב לדף אחר
        // ביטול ברירת המחדל
        event.preventDefault();
        console.log(event);

        // form - אוסף את כל שדות האינפוט שלו לתוך מערך

        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);

        swal(`Hello ${user.username}!`, "login successfuly!", 'success')

    }
    return <>
        <h2>Login:</h2>
        <form onSubmit={(e) => send(e)}>
            <label>username:</label><br></br>
            <input placeholder="input name"></input><br></br>
            <label>password:</label><br></br>
            <input placeholder="input password"></input><br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}