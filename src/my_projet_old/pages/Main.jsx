// import { Hello, Hello2,FirstLogin } from "./welcome"
//import { Login } from "./login"
import { Provider } from "react-redux"
import myStore from "../redux/Store"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "./arnav"
import { Routing } from "./routing"
import './design.css'
import { FirstLogin } from "./welcome"
import { Login } from "./login"
import { Carsss } from "./nihul"




export const Main = () => {
    return <>
        <Provider store={myStore}>
            {/* <Hello></Hello>
            <Hello2></Hello2>
            <FirstLogin></FirstLogin> */}
             <BrowserRouter>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}