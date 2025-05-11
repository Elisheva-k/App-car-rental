import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"

export const Main = () => {

    return <>
        {/* תגית שיודעת לטעון את הקומפוננטה הרצויה ורק אותה */}
        <BrowserRouter>
            {/* browser התפריט צריך להיות טעון בתוך תגית ה */}
            <Nav></Nav>
            {/* היכן שנטען את תגית הראוטינג שם תטענה הקומפוננטות */}
            <Routing></Routing>
        </BrowserRouter>
    </>
}