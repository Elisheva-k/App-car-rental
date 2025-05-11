import { useState } from "react"
import { useRef } from "react"
import { Card } from "./Card"

export const File = () => {

    const [flag, setFlag] = useState(false)
    const [user, setUser] = useState()

    const nameRef = useRef()
    const senderRef = useRef()
    const genderRef = useRef()
    const singleRef = useRef()
    const blessRef = useRef()
    const typeRef = useRef()
    const addblessRef = useRef()
    // const addblessRef = useRef()

    const send = () => {
        const u = {
            // nameRef - מצביע
            // .current - הפקד שעליו אני מצביע
            // .value - אטטריביוט כלשהו מתוך הפקד
            name: nameRef.current.value,
            sender: senderRef.current.value,
            gender: genderRef.current.value,
            single: singleRef.current.value,
            bless: blessRef.current.value,
            type: typeRef.current.value,
            addbless: addblessRef.current.value
        }
        console.log(u);
        setUser(u)
        setFlag(true)
    }

    return <>
        <h4>Login</h4>
        <label>user name:</label><br></br>
        <input placeholder="input username" ref={nameRef}></input><br></br>

        <label>sender:</label><br></br>
        <input placeholder="sender" ref={senderRef}></input><br></br>

        <label>gender:</label><br></br>
        <label htmlFor="male">זכר:</label>
        <input type="radio" ref={genderRef} name="s" id="male"></input><br></br>
        <label>נקבה:</label>
        <input type="radio" ref={genderRef} name="s" id="female"></input><br></br>
        <br></br>

        <label>single:</label><br></br>
        <label>יחיד:</label>
        <input type="radio" ref={singleRef} name="s1" value={'יחיד'}></input><br></br>
        <label>רבים:</label>
        <input type="radio" ref={singleRef} name="s1" value={'רבים'}></input><br></br>
        <br></br>

        <label>bless:</label><br></br>
        <input type="text" placeholder="your bless" ref={blessRef}></input><br></br>

        <select>
            <option disabled selected>בחר סוג:</option>
            <option ref={typeRef}>שבת</option>
            <option ref={typeRef}>חתונה</option>
            <option ref={typeRef}>בת מצוה</option>
            <option ref={typeRef}>יומהולדת</option>
        </select><br></br>

        <label>addbless:</label><br></br>
        <input type="text" placeholder="your addbless" ref={addblessRef}></input><br></br>

        <button onClick={send}>send</button>

        {flag &&
            <Card
                name={user.name}
                sender={user.sender}
                gender={user.gender}
                single={user.single}
                bless={user.bless}
                type={user.type}
            ></Card>
        }

    </>
}