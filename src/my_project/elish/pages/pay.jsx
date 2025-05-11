import { useState } from "react";
import swal from "sweetalert"
import './design.css'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/Action";
import { useNavigate } from "react-router-dom";
import { display } from "@mui/system";
import { Nav } from "./arnav";

export const Pay = () => {
    const [user, setUser] = useState({})
    const users = useSelector(store => store.users)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    const [value, setValue] = useState()
    const navigate = useNavigate()

    const checkCard = (value) => {
        if (value.length < 16) {
            setFlag(false)
            setErrors({ ...errors, card: " עליך להזין עוד " + (16 - value.length) + " ספרות " })
        }
        else if (value.length > 16) {
            setFlag(false)
            setErrors({ ...errors, card: '!מספר כרטיס אשראי חייב להכיל 16 ספרות' })
        }
        else {
            setErrors({ ...errors, card: '' })
            setFlag(true)
        }
    }
    const checkCcv = (value) => {
        if (value.length < 3) {
            setFlag(false)
            setErrors({ ...errors, ccv: " עליך להזין עוד " + (3 - value.length) + " ספרות " })
        }
        else if (value.length > 3) {
            setFlag(false)
            setErrors({ ...errors, ccv: '!חייב להכיל 3 ספרות ccv' })
        }
        else {
                setErrors({ ...errors, ccv: '' })
                setFlag(true)
        }
    }
    const checkVali = (value) => {
        if (value.length == 2) {
            setErrors({ ...errors, checkVali: '! "/"  <- הוסף תו זה' })
            setFlag(false)
        }
        if (value[value.length-1] == '/' && value.length==3) {
            setErrors({ ...errors, checkVali: '' })
            setFlag(true)
        }
    }
    const checkVali2 = (value) => {
        if (value.length < 5) {
            setErrors({ ...errors, checkVali2: '!הזנת תוקף חלקי' })
            setFlag(false)
        }
       else if (value.length > 5) {
            setErrors({ ...errors, checkVali2: '!תוקף לא תקין' })
            setFlag(false)
        }
        else{
            setErrors({ ...errors, checkVali2: '' })
            setFlag(true)
        }
    }
    const send = () => {
        if (flag == false) {
            setErrors({ ...errors, validity3: 'קיימת טעות באחד או יותר מן השדות' })
        }
        else {
            swal('!פרטי האשראי שלך נקלטו בהצלחה במערכת', "!!!נסיעה בטוחה", 'success')
            navigate('/kimatFinish')
        }
    }

    return <>
        <div className="form">
        <h2 className="big">!הזנ/י את פרטי האשראי שלך</h2>
        <label className="lbl">:מספר כרטיס האשראי</label>
        <br></br>
        <input className="lbl" placeholder="num of cerdit card"
            onChange={(e) => checkCard(e.target.value)}
            onBlur={(e) => setUser({ ...user, cerditCard: e.target.value })}></input>
        <br></br>
        <p className="error">{errors.card}</p>
        <label className="lbl">:שלושת הספרות שבגב הכרטיס</label>
        <br></br>
        <input className="lbl" placeholder="CCV"
            onChange={(e) => checkCcv(e.target.value)}
            onBlur={(e) => setUser({ ...user, ccv: e.target.value })}
        ></input>
        <br></br>
        <p className="error">{errors.ccv}</p>

        <label className="lbl">:תוקף הכרטיס</label>
        <br></br>



        <input className="lbl" placeholder="mm/yy"
            onChange={(e) => checkVali(e.target.value)}
             onBlur={(e) => checkVali2(e.target.value)}></input>
        <br></br>
        <p className="error">{errors.checkVali}</p>
        <p className="error">{errors.checkVali2}</p>
        <p className="error">{errors.validity3}</p>

        <button onClick={send}>!לאישור הפרטים, לחצ/י</button><br></br>

</div>
    </>
}