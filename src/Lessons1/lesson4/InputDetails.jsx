export const Input = (props) => {

    const { setName } = props

    const send = (value) => {
        setName(value)
    }

    return <>
        <h4>הכנס שם לקוח:</h4>
        <input placeholder="הכנס שם" onBlur={(e) => send(e.target.value)}></input>
    </>
}