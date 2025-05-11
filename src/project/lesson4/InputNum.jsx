export const InputNum = props => {

    // setNum - פונקצית עריכת כמות המשתתפים
    const { setNum } = props

    const check = (value) => {
        if (value > 0) {
            setNum(value)
        }
    }

    return <>
        <h4>הכנס את כמות המשתתפים:</h4>
        <input type="number" placeholder="הכנס כמות"
            onBlur={(e) => check(+e.target.value)}></input>
    </>
}