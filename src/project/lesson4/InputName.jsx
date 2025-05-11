export const InputName = (props) => {

    // set - פונקצית עריכת השם
    const { set } = props
    console.log(props);
    // const func = props.set

    return <>
        <h4>הכנס את שם המארגן:</h4>
        <input placeholder="הכנס שם"
            onBlur={(e) => set(e.target.value)}></input>
        {/* onBlur={(e) => func(e.target.value)}></input> */}
        {/* onBlur={(e) => props.set(e.target.value)}></input> */}
    </>
}