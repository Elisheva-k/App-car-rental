import { useState } from "react"
import { List } from "./List"
import { ToDoList } from "./ToDoes"

export const Main = () => {

    // const [flag, setFlag] = useState(false)

    return <>

        {/* <button onClick={() => setFlag(!flag)}>show / hide</button>
        {flag && <List></List>} */}
        <ToDoList></ToDoList>
    </>
}