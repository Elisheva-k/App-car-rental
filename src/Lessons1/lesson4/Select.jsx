export const Select = (props) => {

    const { arr, set, text } = props

    return <>
        <h4>בחר {text}:</h4>
        <select onChange={(e) => set(e.target.value)}>
            <option disabled selected>בחר {text}</option>
            {arr.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
    </>
}