// npm i react-router
// npm i react-router-dom

import { Route, Routes } from "react-router-dom"
import { Details } from "./Details"
import { Home } from "./Home"
import { Login } from "./Login"
import { Products } from "./Products"
import { Welcome } from "./Welcome"

export const Routing = () => {

    // הצהרות על ניתובים
    return <>
        {/* תגית עוטפת לכל הניתובים */}
        <Routes>
            {/* הצהרה על ניתוב בודד */}
            {/* path - url ניתוב - מה נכתוב בשורת ה */}
            {/* element - הקומפוננטה שנטען עבור הניתוב */}
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="products" element={<Products></Products>}>
                {/* ניתוב כבנים - בין התגיות */}
                {/* ילד נטען על האב - כתוספת */}
                <Route path="details/:name/:price" element={<Details></Details>}></Route>
            </Route>
            {/* שליחת פרמטרים בניתוב */}
            {/* כל פרמטר נגדיר באמצעות סלש נקודיים */}
            {/* ניתן להגדיר פרמטרים רבים */}
            <Route path="welcome/:name/:password" element={<Welcome></Welcome>}></Route>
            {/* ניתוב ברירת מחדל - אם הניתוב ריק */}
            <Route path="" element={<Home></Home>}></Route>
        </Routes>
    </>
}