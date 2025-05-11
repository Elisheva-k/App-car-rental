import { useParams } from "react-router-dom"

export const Welcome = () => {

    // ריאקט אוספת את כל הפרמטרים שנשלחו בניתוב לאובייקט ג'סון
    // { name: 'aaa', password: '111' }
    const params = useParams()
    console.log(params);

    const { name, password } = params

    return <>
        {/* <h2>Our Dear {params.name}!</h2> */}
        <h2>Our Dear {name}!</h2>
        <h1>WELCOME TO OUR AMAZING APPLICATION!!!!!!!!!</h1>
        {/* <h6>Your password is: {params.password}</h6> */}
        <h6>Your password is: {password}</h6>
    </>
}