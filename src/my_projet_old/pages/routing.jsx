
import { Route, Routes } from "react-router"
import { FirstLogin } from "./welcome"
import { Odot } from "./odot"
import { Hachzarot } from "./hachzarot"
import { Hashalot } from "./hashalot"
import './design.css'
import { Login } from "./login"
import { Nav } from "./arnav"
import {Nbuttons} from "./nihul"
import { Carsss } from "./allCar"
import { AddC } from "./addC"
import { TsorKesher } from "./contact"
import { FormInvent } from "./formInvent"
import { Pay } from "./pay"
import { HomeMesunan } from "./homeMesunan"
import { Home } from "./home"
import { DelC } from "./delC";







// יצירת קומפוננטה שמכילה הגדרות של הניתובים
// טען קומפוננטה מסוימת url הצהרה עבור ניתוב מסוים 
export const Routing = () => {
    return <>
        {/* Routes - תגית שמכילה את כל ההגדרות של ניתובים */}
        <Routes>
            {/* Route - הגדרה של ניתוב בודד */}
            {/* path = url ניתוב שנכתוב ב */}
            {/* element = קומפוננטה שנטען */}
            <Route path="odot" element={<Odot></Odot>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
             <Route path="nihul" element={<Nbuttons></Nbuttons>}></Route>
             <Route path="allCar" element={<Carsss></Carsss>}></Route>
             <Route path="addC" element={<AddC></AddC>}></Route>
             <Route path="delC" element={<DelC></DelC>}></Route>
           <Route path="hachzarot" element={<Hachzarot></Hachzarot>}></Route>
            <Route path="hashalot" element={<Hashalot></Hashalot>}></Route>
            <Route path="contact" element={<TsorKesher></TsorKesher>}></Route>
            <Route path="formInvent" element={<FormInvent></FormInvent>}></Route>
            <Route path="pay" element={<Pay></Pay>}></Route>
            <Route path="homeMesunan" element={<HomeMesunan></HomeMesunan>}></Route>



            {/* ניתוב ברירת מחדל */}
            <Route path="" element={<FirstLogin></FirstLogin>}></Route>

        </Routes>
    </>
} 