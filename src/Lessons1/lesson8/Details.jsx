import { useParams } from 'react-router-dom'
import './style.css'

export const Details = () => {

    const params = useParams()

    const { name, price } = params

    return <>
        <div className="product">
            name: {name}
            <br></br>
            price: {price}
        </div>
    </>
}