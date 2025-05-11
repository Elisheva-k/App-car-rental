import { useRef, useState } from "react"
import swal from "sweetalert"
import { Card } from "../lesson5_hw/Card"
// npm i sweetalert

export const LoginRef = () => {

    // userRef - הצבעה לפקד
    const nameRef = useRef()
    let emailRef = useRef()
    let passRef = useRef()

    let hRef = useRef()

    const send = () => {
        // console.log(nameRef);
        // יצרית אובייקט שיכיל את הערכים שהוזנו בפקדים
        const user = {
            // nameRef - מצביע
            // .current - הפקד שעליו אני מצביע
            // .value - אטטריביוט כלשהו מתוך הפקד
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value
        }
        // // הדפסת האובייקט 
        console.log(user);
        swal(`Hello ${user.username}`, 'login successfully!', 'success')
        // swal('Hello', 'login failed!', 'error')
        // swal('Hello', 'login successfully!', 'info')
        hRef.current.style.color = 'red'
    }

    return <>
        <h4 ref={hRef}>Login</h4>
        <label>user name:</label><br></br>
        {/* ref - reference - מצביע */}
        <input placeholder="input username" ref={nameRef}></input><br></br>

        <label>email:</label><br></br>
        <input placeholder="input email" ref={emailRef}></input><br></br>

        <label>password:</label><br></br>
        <input type="password" placeholder="input password" ref={passRef}></input><br></br>

        <br></br>
        <button onClick={send}>send</button>
    </>
}