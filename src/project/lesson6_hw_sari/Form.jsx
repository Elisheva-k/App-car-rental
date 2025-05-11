import { useState } from "react"
import { GiftCard } from "./GiftCard"

export const Form = () => {
    const [details, setDetails] = useState({})
    const [f, setF] = useState(false)

    const send = () => {
        setF(true)
    }
    return <>
        <h1>עצב בקלות את כרטיס הברכה המושלם שלך!</h1>
        <br></br><p>מלא את הפרטים במקום המתאים ואנחנו נכין בשבילך את הכרטיס החלומי בדיוק ובהתאמה מושלמת לצרכים האישיים</p>
        <input type="text" placeholder="הכנס שם הנמען" onBlur={(e) => { setDetails({ ...details, name: e.target.value }) }}></input><br></br>
        <select onClick={(e) => { setDetails({ ...details, min: e.target.value }) }}>
            <option value="1">זכר</option>
            <option value="2">נקבה</option>
        </select>
        <label>בחר מין הנמען</label><br></br>
        <select onClick={(e) => { setDetails({ ...details, amount: e.target.value }) }}>
            <option value="1">יחיד</option>
            <option value="2">רבים</option>
        </select>
        <label>בחר כמות נמענים</label>
        <br></br>
        <input type="text" placeholder="הכנס איחול אישי" onBlur={(e) => { setDetails({ ...details, bless: e.target.value }) }}></input><br></br>
        <input type="text" placeholder="באפשרותך להכניס כאן איחול נוסף" onBlur={(e) => { setDetails({ ...details, moreBless: e.target.value }) }}></input><br></br>
        <input type="text" placeholder="הכנס את שם המוען" onBlur={(e) => { setDetails({ ...details, from: e.target.value }) }}></input><br></br>
        <label>בחר סוג אירוע</label>
        <select onClick={(e) => { setDetails({ ...details, event: e.target.value }) }}>
            <option value="baby">הולדת תינוק</option>
            <option value="wedding">חתונה</option>
            <option value="weddingDay">יום נישואים</option>
            <option value="birthday">יום הולדת</option>
        </select><br></br>
        <button onClick={send}>הצג תוצאה על המסך</button>
        {f &&
            <GiftCard name={details.name} min={details.min} amount={details.amount} from={details.from}
                bless={details.bless} event={details.event} moreBless={details.moreBless}></GiftCard>
        }

    </>
}