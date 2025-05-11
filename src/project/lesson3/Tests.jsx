import { useState } from "react";
import Study from './Girl Leaning on Desk.jpg';

export const Tests = () => {

    // let num = 0
    // useState משתני שמשפיעים על התצוגה מוגדרים כ 
    // ריאקט מתעלמת משינוי של משתנה רגיל
    // ע"מ להצליח לזהות רק את האלמנטים שצריכים טעינה מחדש
    // הגדרת של מערך
    // במקום הראשון יהיה המשתנה
    // במקום השני - פונקציה שאחראית על שינוי המשתנה
    // בסוגריים העגולות ניתן להציב ערך התחלתי
    // useState - הגדרת משתנה 
    // חייבת להיות מחוץ לכל הפונקציה
    const [num, setNum] = useState(0)
    const [plus, setPlus] = useState(1)

    // const [flag, setFlag] = useState(true)

    const incNum = () => {
        // num++
        // הצבת ערך חדש
        // setNum(5)
        // שימוש בערך הקודם
        setNum(num + plus)
        // setNum(num++) // error
        // הצבת ערך של משתנה
        // let x = num + 1
        // setNum(x)
        // דוגמה
        // setFlag(!flag)
        // console.log(flag);
        console.log(num);
    }

    const changePlus = (event) => {
        console.log(event);
        // event - אירוע - onblur
        // .target - הפקד שהפעיל את האירוע - input
        // .value - ערך של הפקד

        // setPlus(parseInt(event.target.value))
        setPlus(+event.target.value)
    }

    return <>
        <h2>I solved {num} tests as a practice for the final test!</h2>
        {/* camelCase - מילה שניה באות גדולה */}
        {/* font-size => fontSize */}
        {/* onclick => onClick */}
        {/* class => className */}
        {/* <input placeholder="input num of tests" onBlur={(event) => changePlus(event)}></input> */}
        {/* ניתן לזמן את הפונקציה בצורה ישירה כיון שלא רצינו לעשות שום דבר נוסף */}
        <input placeholder="input num of tests" onBlur={(e) => setPlus(+e.target.value)}></input>
        <button onClick={incNum}>add test</button>
        {/* זימון פונקציה ללא סוגריים עגולות */}
        {/* סוגריים עגולות יגרמו להפעלה של הפונקציה בעת טעינה */}
        <img src={Study} style={{ float: 'right', width: '30vw', height: 'auto' }}></img>
    </>
}

// useState
// function useState(value: any) {
//     let temp

//     temp = value

//     function func(newValue) {
//         temp = newValue
//         // בדיקה אילו אלמנטים תלויים בשינוי המשתנה
//     }

//     return [temp, func]
// }

// const arr = useState(10)

// let num = arr[0]
// let setNum = arr[1]

// setNum(20)

// let arr

// let x = arr[0]
// let y = arr[1]

// שליפה לפי מיקום - arr
// let [x, y] = arr
// שליפה לפי מפתחות - json
// let { name, age } = props