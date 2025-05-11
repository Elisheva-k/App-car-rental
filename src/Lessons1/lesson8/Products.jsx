import { Outlet, useNavigate } from "react-router-dom"

export const Products = () => {

    const nav = useNavigate()

    const products = [
        { name: 'sunhat', price: '15' },
        { name: 'ice cream', price: '10' },
        { name: 'watermelon', price: '20' },
        { name: 'tawel', price: '20' },
        { name: 'tube', price: '10' },
        { name: 'sunglasses', price: '10' },
        { name: 'goggles', price: '10' }
    ]

    const show = (index) => {
        // ניתוב לבן - בלי סלש!
        nav(`details/${products[index].name}/${products[index].price}`)
    }

    return <>
        {/* מגדירה היכן הבן יטען */}
        <Outlet></Outlet>
        {products.map((item, index) =>
            <div key={index}>
                <h3>~~~~~~~~~~~~~~~</h3>
                <h3>name: {item.name}</h3>
                <button onClick={() => show(index)}>show details</button>
            </div>
        )}
    </>
}