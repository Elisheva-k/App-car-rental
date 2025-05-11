// npm i react-router
// npm i react-router-dom

import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Products } from "./Products"
import { Register } from "./Register"

export const Routing = () => {

    // הצהרות על ניתובים
    return <>
        {/* תגית עוטפת לכל הניתובים */}
        <Routes>
            {/* הצהרה על ניתוב בודד */}
            {/* path - url ניתוב - מה נכתוב בשורת ה */}
            {/* element - הקומפוננטה שנטען עבור הניתוב */}
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
        </Routes>
    </>
}