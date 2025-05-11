export const SelectItem = (props) => {

    const { cakes, set } = props

    return <>
        <h4>בחר מוצר:</h4>
        <select onChange={(e) => set(e.target.value)}>
            <option disabled selected>בחר מוצר:</option>
            {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
            {/* הפרמטר השני - האינדקס */}
            {cakes.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
    </>
}