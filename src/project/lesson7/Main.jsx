import { BrowserRouter } from "react-router-dom"
import { ValidForm } from "./ValidForm"
import { Routing } from "./Routing"
import { Nav } from "./Nav"

export const Main = () => {
    return <>
        {/* <ValidForm></ValidForm> */}
        {/* BrowserRouter - תגית שיודעת לטעון רק את הקומפוננטה הרצויה לפי הניתוב */}
        <BrowserRouter>
            {/* BrowserRouter התפריט צריך להיות בתוך ה  */}
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
    </>
}