import axios from "axios"
import { useEffect, useState } from "react"
import { getToDo, getToDoList } from "./api"

export const ToDoList = () => {

    const [list, setList] = useState([])
    const [todo, setTodo] = useState()

    useEffect(() => {
        getToDoList()
            // אם הבקשה הצליחה
            // מקבלת ביטוי למבדא - עם התשובה שחזרה מהשרת
            .then(x => {
                console.log(x);
                // data הנתונים שחזרו נמצאים במפתח 
                setList(x.data)
            })
            // אם הבקשה נכשלה
            // מקבלת ביטוי למבדא - השגיאה שחזרה
            .catch(err => {
                console.log(err);
            })
    }, [])

    const showDetails = (id) => {
        getToDo(id)
            .then(x => {
                setTodo(x.data)
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    return <>
        {todo && <>
            <p>{todo.id}</p>
            <p>{todo.userId}</p>
            <p>{todo.title}</p>
            <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        </>}
        {list.map(x => <>
            <p key={x.id}>{x.title}</p>
            <button onClick={() => showDetails(x.id)}>show</button>
        </>)}

    </>
}