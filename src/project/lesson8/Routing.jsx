// התקנה של ספריות הניתובים
// npm i react-router
// npm i react-router-dom

import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Products } from "./Products"
import { Details } from "./Details"
import { Login } from "./Login"


// יצירת קומפוננטה שמכילה הגדרות של הניתובים
// טען קומפוננטה מסוימת url הצהרה עבור ניתוב מסוים 
export const Routing = () => {
    return <>
        {/* Routes - תגית שמכילה את כל ההגדרות של ניתובים */}
        <Routes>
            {/* Route - הגדרה של ניתוב בודד */}
            {/* path = url ניתוב שנכתוב ב */}
            {/* element = קומפוננטה שנטען */}
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="products" element={<Products></Products>}>
                {/* הגדרה של ניתוב כילד */}
                <Route path="details/:name/:amount" element={<Details></Details>}></Route>
            </Route>

            {/* ניתוב ברירת מחדל */}
            <Route path="" element={<Home></Home>}></Route>

        </Routes>
    </>
}