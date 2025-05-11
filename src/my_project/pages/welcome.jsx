import { useState } from "react";
import swal from "sweetalert"
import './design.css'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/Action";
import { useNavigate } from "react-router-dom";
//////כניסה לאתר וניתוב נמתאימים//////
export const FirstLogin = () => {
    const [user, setUser] = useState({})
    const users = useSelector(store => store.users)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const navigate = useNavigate()
    const checkname = (value) => {
        if (!/^[a-zA-Zא-ת]/i.test(value)) {

            setErrors({ ...errors, name: 'שם יכול להכיל אותיות בלבד ⚠️' })
            setFlag(false)
        }
        else {
            setErrors({ ...errors, name: '' })
            setFlag(true)
        }
    }


    const checkPassword = (value) => {
        if (value.length < 4) {
            setFlag(false)
            setErrors({ ...errors, password: 'סיסמא חייבת להכיל לפחות ארבעה תווים ⚠️' })
        }
        else if (value.length > 10) {
            setFlag(false)
            setErrors({ ...errors, password: 'סיסמא יכולה להכיל עד עשרה תווים ⚠️' })
        }
        else {
            setErrors({ ...errors, password: '' })
            setFlag(true)
        }
    }
    const send = () => {
        if (flag == false) {
            setErrors({ ...errors, password: 'קיימת טעות באחד או יותר מן השדות ⚠️' })
        }
        else {
            let arr = users.filter(x => x.password == user.password && x.username == user.username)

            if (arr.length > 0) {
                dispatch(setCurrentUser(arr[0]))
                swal(`!שלום ${arr[0].username}`, "!!!נסיעה בטוחה", 'success')
                navigate('/home')
            }
            else {
                swal(`!הי`, "!את/ה חדש/ה פה! הנך מועבר/ת להזנת הפרטים הרלוונטיים", 'success')
                navigate('/login')
            }
        }
    }
    return <>
        <div className="form">
            <h2 className="big1">:לכניסה למערכת</h2>
            <label className="lbl1">:שם משתמש</label>
            <br></br>
            <input className="lbl" placeholder="input name"
                onBlur={(e) => setUser({ ...user, username: e.target.value })}
                onChange={(e) => checkname(e.target.value)}></input>
            <br></br>
            <p className="error">{errors.name}</p>


            <label className="lbl1">:קוד אישי</label>
            <br></br>
            <input className="lbl" placeholder="input password"
                onBlur={(e) => setUser({ ...user, password: e.target.value })}
                onChange={(e) => checkPassword(e.target.value)}></input>
            <br></br>
            <p className="error">{errors.password}</p>

            <button className="btn" onClick={send}>send</button>
        </div>
    </>
}