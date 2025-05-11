import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const Login = () => {

    // הגדרנו משתנה שיאפשר לנתב מתוך קומפוננטה לקומפוננטה אחרת
    const navigate = useNavigate()

    let users = [
        { username: 'Lis', email: 'lis2004@gmail.com', password: '2004' },
        { username: 'Esty', email: 'esty@gmail.com', password: 'esty' },
        { username: 'Tovi', email: 'tovi8392@gmail.com', password: '8392' },
        { username: 'Efrat', email: 'efrat8720@gmail.com', password: '8720' },
        { username: 'Elisheva', email: 'eli72006@gmail.com', password: '2006' },
    ]

    const send = (event) => {
        event.preventDefault();
        const user = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        console.log(user);
        let u = users.filter(x => x.email == user.email && x.password == user.password)[0]
        if (u) {
            swal(`Hello ${user.username}`, 'login successfully! 😊😄😁😍', 'success')
            // אם הלקוח קיים - ננתב לברוך הבא
            // ניתוב לאח - עם סלש
            // ניתוב לבן - בלי סלש
            navigate(`/welcome/${user.username}/${user.password}`)
        }
        else {
            swal('Oopss!', 'login failed... 😞😥😔', 'error')
        }

    }

    return <>
        <h4>Login</h4>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor="username">user name:</label><br></br>
            <input id="username" placeholder="input username"></input><br></br>

            <label htmlFor="email">email:</label><br></br>
            <input id="email" placeholder="input email"></input><br></br>

            <label htmlFor="password">password:</label><br></br>
            <input id="password" type="password" placeholder="input password"></input><br></br>

            <input type={'submit'}></input>
        </form>
    </>
}