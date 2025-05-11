import { useState } from "react"

const SelectWoods = () => {

    // let num = 0
    // useState - virtual dom הגדרת משתנים שיהיו מוכרים ב 
    // שינוי משפיע גם על התצוגה
    // אין להגדיר משתנים כאלו בתוך פונקציה
    // מגדירים מערך המכיל שני איברים -
    // המקום הראשון במערך - המשתנה בעצמו
    // המקום השני - פונקציה שאחראית על שינוי המשתנה
    // בתוך הסוגריים ניתן להגדיר ערך התחלתי
    const [num, setNum] = useState(0)
    const [plus, setPlus] = useState(1)

    // let x = 5
    // let y = 0
    // let z = x / y

    const incNum = () => {
        // num++
        // הצבת ערך
        // setNum(5)
        // שימוש בערך הקודם
        setNum(num + plus)
        // הצבת משתנה
        // let x = num + 1
        // setNum(x)
        console.log(num);
    }

    const changePlus = (event) => {
        console.log(event);
        setPlus(parseInt(event.target.value))
        // setPlus(+event.target.value)
        console.log(plus);
    }

    return <>
        <h1>We have {num} woods for our bonfire!</h1>
        {/* camelCase - משתנות כאשר מילה שניה באות גדולה HTML מילים שמורות של  */}
        {/* class='aa' => className='aa' */}
        {/* background-color => backgroundColor */}
        <button onClick={incNum}>inc num</button>
        <input type="number" placeholder="input number" onBlur={(e) => changePlus(e)}></input>
    </>
}

export default SelectWoods