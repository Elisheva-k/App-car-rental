import { useState } from "react";
import swal from "sweetalert"
import './design.css'
import { useDispatch, useSelector } from "react-redux";
//import { Navigate, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/Action";
import { useNavigate } from "react-router-dom";
//הכנסת פרטים אישיים ובדיקה האם המשתמש קיים במערכת
//באם הוא כבר קיים- מעבר לדף הבית(HOME)
//אך אם אינו קיים- מועבר להרשמה(LOGIN)
export const FirstLogin = () => {
    const [user, setUser] = useState({})
    const users = useSelector(store => store.users)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const navigate = useNavigate()
    const checkPassword = (value) => {
        if (value.length < 4) {
            setFlag(false)
            setErrors({ ...errors, password: 'סיסמא חייבת להכיל לפחות ארבעה תווים' })
        }
        else if (value.length > 10) {
            setFlag(false)
            setErrors({ ...errors, password: 'סיסמא יכולה להכיל עד עשרה תווים' })
        }
        else {
            setErrors({ ...errors, password: '' })
            setFlag(true)
        }
    }
    const send = () => {
        if(flag==false){
            setErrors({ ...errors, password: 'קיימת טעות באחד או יותר מן השדות' })
        }
        else{
            let arr = users.filter(x => x.password == user.password && x.username == user.username )

        if (arr.length > 0) {
            dispatch(setCurrentUser(arr[0]))
            swal(`!שלום ${arr[0].username}`, "!!!נסיעה בטוחה",'success')
            navigate('/home')           
        }
        else {
            swal(`!אווופס`, "!אינך קיים במערכת! את מועבר להזנת הפרטים הרלוונטיים",'error')
            navigate('/login')        }
    }
    }
    return <>
         <h1 className='big'>HELLOW TO THE AMAZING APLICATION</h1>
        <h3 className='small'>...בלי לחץ! האתר בבניה</h3>
        <h2 className="big">Login:</h2>
        <label className="lbl">username:</label>
        <br></br>
        <input className="lbl" placeholder="input name"
        onBlur={(e) => setUser({ ...user, username: e.target.value })}></input>
        <br></br>

        <label className="lbl">password:</label>
        <br></br>
        <input className="lbl" placeholder="input password"
            onBlur={(e) => setUser({ ...user, password: e.target.value })}
            onChange={(e) => checkPassword(e.target.value)}></input>
        <br></br>
        <p className="error">{errors.password}</p>

        <button onClick={send}>send</button>
    </>
}