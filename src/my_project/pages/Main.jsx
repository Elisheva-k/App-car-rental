
import { Provider } from "react-redux"
import myStore from "../redux/Store"
import { BrowserRouter } from "react-router-dom"
import { Routing } from "./routing"
import './design.css'
export const Main = () => {
    return <>
        <Provider store={myStore}>
             <BrowserRouter>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}