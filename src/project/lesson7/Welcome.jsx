import { useParams } from "react-router-dom"

export const Welcome = () => {

    // ריאקט אוספת לנו את כל הפרמטרים שנשלחו בניתוב לאובייקט ג'סון
    // שמות המפתחות כשמות הפרמטרים
    const params = useParams()
    console.log(params);

    const { name, password } = params

    return <>
        {/* <h2>Our Dear {params.name}</h2> */}
        <h2>Our Dear {name == "Malki" && 'Bride'} {name}</h2>
        <h1>WELCOME TO OUR AMAZING APPLICATION!!!!!!!!!!</h1>
        {/* <h6>Your password is {params.password}</h6> */}
        <h6>Your password is {password}</h6>
        <h6>made by fullstack2</h6>
    </>
}