import { Outlet, useNavigate } from "react-router-dom"

export const Products = () => {

    const products = [
        { name: 'אייס קפה', amount: '4 בקבוקים' },
        { name: 'לחם שום', amount: '1 קג' },
        { name: 'רוטב פיצה', amount: '2 בקבוקים' },
        { name: 'חסה', amount: '2 חבילות' },
        { name: 'לחוח', amount: '1 קג' },
        { name: 'כובנה', amount: '2 קג' },
        { name: 'חילבה', amount: '3 ליטר' },
        { name: 'מרק תימני', amount: '2 סירים' },
        { name: 'עוגיות אוראו', amount: '10 חבילות' },
        { name: 'ביסבס', amount: '1' },
        { name: 'סחוג בנדורה', amount: '1' },
        { name: 'סלוף', amount: '1' }
    ]

    const nav = useNavigate()

    const show = (index) => {
        // ניתוב לילד - בלי סלש
        nav(`details/${products[index].name}/${products[index].amount}`)
    }

    return <>
        {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
        <Outlet></Outlet>
        {products.map((item, index) =>
            <div key={index}>
                <p>{item.name}</p>
                <button onClick={() => show(index)}>show details</button>
            </div>
        )}
    </>
}