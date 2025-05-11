import { useEffect, useState } from "react"

export const List = () => {

    const arr = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
    const [color, setColor] = useState()

    // מחזור החיים של הקומפוננטה
    // life cycle
    // onload
    // onInit
    useEffect(() => {
        // בעת טעינה 
        // לוגיקה שתקרה ברגע שהקומפוננטה נטענת
        console.log('list');
        // document.title = `There are ${arr.length} objects`
        document.title = 'There are' + arr.length + 'objects'
        // בעת מיתה של הקומפוננטה
        // ברגע שהקומפוננטה כבר לא מוצג
        // מחזירה פונקציה
        // onDestroy
        return () => {
            document.title = 'ReactApp'
        }
    }, [])

    // ניתן להפעיל כמה יוזאפקטים
    // ולתת תנאים שונים או השפעות של משתנים מסוימים...
    useEffect(() => {
        document.body.style.backgroundColor = color
        // onChange
        // כל משתנה שיהיה בתוך הסוגריים המרובעות יגרום להפעלת היוזאפקט הנוכחי
    }, [color])

    return <>
        <input type={'color'} onChange={(e) => setColor(e.target.value)}></input>
        <ul>
            {/* Each child in a list should have a unique key */}
            {/* כל ילד במערך - מומלץ שיהיה לו מפתח יחודי */}
            {arr.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
    </>

}