import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addProduct } from "./redux/Action"

export const Products = () => {

    // selector - שליפה
    // const products = useSelector(store => store.products)
    // useSelector - מקבל ביטוי למבדא ומציב את הסטור שהתקבל בפרוביידר
    const products = useSelector(x => x.products)
    const [product, setProduct] = useState()

    // const nav = useNavigate()

    // const show = (index) => {
    //     // ניתוב לילד - בלי סלש
    //     nav(`details/${products[index].name}/${products[index].amount}`)
    // }

    const dis = useDispatch()

    const add = () => {
        dis(addProduct(product))
    }

    return <>
        {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
        <Outlet></Outlet>
        {products.map((item, index) =>
            <div key={index}>
                <label>{item.name}</label> - <label>{item.amount}</label>
                {/* <button onClick={() => show(index)}>show details</button> */}
            </div>
        )}
        <input placeholder="input name" onBlur={(e) => setProduct({ ...product, name: e.target.value })}></input>
        <input placeholder="input amount" onBlur={(e) => setProduct({ ...product, amount: e.target.value })}></input>
        <button onClick={add}>add product</button>
    </>
}