import swal from "sweetalert";
import { useSelector } from 'react-redux'

export const Login = () => {

    const users = useSelector(store => store.users)

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