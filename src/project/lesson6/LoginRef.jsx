import { useRef } from "react";
import swal from "sweetalert"
// npm i sweetalert

export const LoginRef = () => {

    // use הגדרת משתנים מסוג  
    // לעולם לא בתוך פונקציה
    // ref - reference - יצירת מצביע לאלמנט
    const nameRef = useRef()
    const passRef = useRef()

    const hRef = useRef()

    const send = () => {

        console.log(nameRef);

        const user = {
            // nameRef - מצביע
            // .current - element
            // .value - atribbute
            username: nameRef.current.value,
            password: passRef.current.value
        }
        console.log(user);

        swal(`Hello ${user.username}!`, "login successfuly!", 'success')

        hRef.current.innerHTML = `Hello ${user.username}!`
        hRef.current.style.color = 'hotpink'
    }
    return <>
        <h2 ref={hRef}>Login:</h2>
        <label for='un'>username:</label><br></br>
        {/* ref - הגדרת משתנה מצביע לאלמנט */}
        <input id="un" placeholder="input name" ref={nameRef}></input><br></br>
        <label for='pass'>password:</label><br></br>
        <input id="pass" type="password" placeholder="input password" ref={passRef}></input><br></br>
        <button onClick={send}>send</button>
    </>
}