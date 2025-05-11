
import { useState } from "react";
import './style.css'
export const Album = () => {
    const [user, setUser] = useState({})
    const [flag, setFlag] = useState()
    const change = () => { setFlag(true) }

    return <>
        <h4 className="h">ברוכים הבאים!!!!</h4>
        <h6 className="h>">אם אתה מעונין לשלוח כרטיס ברכה מלא את הפרטים הבאים:י</h6>
        <label>for1:</label><br></br>
        <input placeholder="input name" onBlur={(e) => setUser({ ...user, for1: e.target.value })}></input><br></br>

        <label>min:</label><br></br>
        <input placeholder="input type" onBlur={(e) => setUser({ ...user, min: e.target.value })}></input><br></br>

        <label>num:</label><br></br>
        <input placeholder="input num" onBlur={(e) => setUser({ ...user, num: e.target.value })}></input><br></br>

        <label>wish:</label><br></br>
        <input placeholder="add wish" onBlur={(e) => setUser({ ...user, wish: e.target.value })}></input><br></br>

        <label>from:</label><br></br>
        <input placeholder="input name" onBlur={(e) => setUser({ ...user, from: e.target.value })}></input><br></br>

        <label>addWish:</label><br></br>
        <input placeholder="add wish" onBlur={(e) => setUser({ ...user, addWish: e.target.value })}></input><br></br>

        <label>type1:</label><br></br>
        <input placeholder="input TypeEvent" onBlur={(e) => setUser({ ...user, type1: e.target.value })}></input><br></br>
        <button onClick={change}>send</button>
        {flag && <Send user={user}></Send>}
    </>
}

const Send = (props) => {

    const { user } = props

    return <>

        <div className={`${user.type1} wishAll`}>
            <p> :אל  {`${user.for1} ${user.min.charAt(0) === 'n' && user.num === 1 ? 'היקרה' : user.min.charAt(0) === 'z' && user.num === 1 ? 'היקר' :
                user.min.charAt(0) === 'n' && user.num > 1 ? 'היקרות' : 'היקרים'}`}</p>
            <p>{user.wish}</p>
            <p className='ready'> {user.type1 === 'wedding' ? 'חתונה' : user.type1 === 'newborn' ? 'תינוק חדש נולד!' :
                user.type1 === 'birthday' ? 'יומולדת שמח' : 'בר מצוה'}</p>
            <p>{user.addWish}</p>
            <p>מ{user.from}</p>
            {<img src={`${process.env.PUBLIC_URL}/images/${user.pic}.JPG`} alt={user.pic}></img>}
        </div>

    </>

}