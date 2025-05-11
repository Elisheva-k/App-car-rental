import { useSelector } from 'react-redux'

export const Products = () => {

    // list products from state
    // useSelector - שליפה מתוך הסטייט
    // מקבל פונקצית חץ שמקבלת משתנה - אוטומטית הסטור
    // const products = useSelector(store => store.products)
    const products = useSelector(x => x.products)

    return <>

        {products && products.map((item, index) =>
            <div key={index}>
                <h3>~~~~~~~~~~~~~~~</h3>
                <h3>name: {item.name}</h3>
                <h3>price: {item.price}</h3>
            </div>
        )}
        <button>add product</button>
    </>
}