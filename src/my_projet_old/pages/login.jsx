import { useState } from "react";
import swal from "sweetalert"
import './design.css'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/Action";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({})
    const users = useSelector(store => store.users)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const navigate = useNavigate()

    const checkPhone = (value) => {
        if (value.length < 10) {
            setFlag(false)
            setErrors({ ...errors, phone: '!עליך להזין את מספר הנייד שלך בלי להחסיר אף ספרה' })
        }
        else if (value.length > 10) {
            setFlag(false)
            setErrors({ ...errors, phone: '!עוד לא המציאו טלפון בעל יותר מעשר ספרות'})
        }
        else {
            setErrors({ ...errors, phone: '' })
            setFlag(true)
        }
    }
    const checkEmail = (value) => {
        if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i.test(value)) {
            setErrors({ ...errors, email: '...זה לא נראה כמו מייל' })
            setFlag(false)
        }
        else {
            setErrors({ ...errors, email: '' })
            setFlag(true)
        }
    }
    const send = () => {
        if (flag == false) {
            setErrors({ ...errors, city: 'קיימת טעות באחד או יותר מן השדות' })
        }
        else {
                swal('!אנו שמחים על בחירתך ובטוחים שתהנ/י מהשירות שלנו', "!!!נסיעה בטוחה", 'success')
                navigate('/home')
        }
    }
    return <>

        <h2 className="big">!אנו שמחים על הצטרפותך למאגר לקוחותינו</h2>
        <label className="lbl">phone:</label>
        <br></br>
        <input className="lbl" placeholder="your phone"
            onChange={(e) => checkPhone(e.target.value)}
            onBlur={(e) => setUser({ ...user, phone: e.target.value })}></input>
        <br></br>
        <p className="error">{errors.phone}</p>
        <label className="lbl">email:</label>
        <br></br>
        <input className="lbl" placeholder="input email"
            onBlur={(e) => setUser({ ...user, email: e.target.value })}
            onChange={(e) => checkEmail(e.target.value)}></input>
        <br></br>
        <p className="error">{errors.email}</p>

        <label className="lbl">city:</label>
        <br></br>
        <input className="lbl" placeholder="your city"></input>
        <br></br>
        <p className="error">{errors.city}</p>


        <button onClick={send}>!לסיום, לחצ/י</button>
    </>
}