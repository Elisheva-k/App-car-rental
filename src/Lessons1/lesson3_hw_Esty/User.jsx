import { Message } from "./Message"

export function User(props) {

    const { myname, email, password, phone } = props

    const lengPhone = () => {
        if (phone.length == 9 || phone.length == 10)
            return true
        else
            return false
    }
    const lengPass = () => {
        if (password.length < 5)
            return true
        else
            return false
    }

    return <>
        <div>
            user: userName:{myname}, email:{email}
            {lengPhone() && <p>phone:{phone} valid phone!</p>}
            {lengPass() == true && <Message></Message>}
        </div>
    </>
}