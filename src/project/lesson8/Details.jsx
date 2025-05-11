import { useParams } from 'react-router'
import './style.css'

export const Details = () => {

    const params = useParams()
    const { name, amount } = params

    return <>
        <div className="product">
            {name}<br></br>
            {amount}
        </div>
    </>
}