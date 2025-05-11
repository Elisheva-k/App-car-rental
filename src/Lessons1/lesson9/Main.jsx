import { Provider } from "react-redux"
import { Login } from "./Login"
import { Products } from "./Products"
import store from "./redux/Store"
import { Register } from "./Register"

export const Main = () => {
    return <>
        {/* Provider - ספק */}
        {/* store - מקבלת כפרופס את הסטור שיצרנו */}
        {/* כל קומפוננטה שתהיה טעונה בין התגיות של הפרוביידר תכיר את הסטור */}
        <Provider store={store}>
            {/* Provider בתוך ה BrowserRouter טעינה של */}
            {/* ע"מ שכל קומפוננטה שתעטן דרך הראוטינג תכיר את הסטור */}
            {/* BrowserRouter => Nav, Routing */}
            <Login></Login>
            <Register></Register>
            <Products></Products>
        </Provider>
    </>
}