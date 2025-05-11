// axios - ספריה המאפשרת לבצע קריאות שרת
// npm i axios

import axios from "axios"

export const getToDoList = () => {
    // async
    // הוא אסינכרוני JS קוד 
    // הקוד מתבצע שורה אחרי שורה
    // אם לשורה מסוימת בקוד לוקח זמן עד שמסתיים
    // והשורה הבאה תלויה בשורה הקודמת
    // אנחנו בבעיה
    // כי לא מחכים
    // לדוגמה:
    // הפעלת פונקציה שאורכת זמן
    // בדיקת הערך המוחזר
    // הערך לא יהיה קיים כי הקוד לא מחכה לפונקציה שתסיים
    // קריאת שרת אורכת זמן ולכן צריך לתפוס את מה שחזר
    // then & catch אחת מהדרכים זה 
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}

export const getToDo = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}