export const SelectAdds = (props) => {

    const { list, setAdd } = props

    return <>
        <h4>בחר תוספת:</h4>
        <select onChange={(e) => setAdd(e.target.value)}>
            <option disabled selected>בחר תוספת:</option>
            {list.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
    </>
}