import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"
import { Provider } from "react-redux"
import myStore from "./redux/Store"
import { Products } from "./Products"

export const Main = () => {
    return <>
        {/* Provider - ספק */}
        {/* קומפוננטה מובנית - react-redux */}
        {/* מקבלת פרופס - store */}
        {/* כל קומפוננטה שתהיה טעונה בתוך הספק תכיר את הסטור */}
        <Provider store={myStore}>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}