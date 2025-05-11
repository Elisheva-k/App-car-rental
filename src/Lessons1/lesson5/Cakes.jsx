export const Cakes = props => {

    const { name, cake, amount } = props

    const small = {
        color: 'black',
        fontSize: '15px'
    }

    const big = {
        color: 'red',
        fontSize: '20px'
    }

    const style = amount > 50 ? 'big' : 'small'

    return <>
        {/* <div style={{ color: amount > 50 ? 'red' : 'black' }}>
            <label>{name} brings</label>
            {amount && <label> {amount} units of </label>}
            <label> {cake}</label>
            {amount > 50 && <label> WOW!!!!</label>}
            <br></br>
        </div> */}
        {/* <div style={amount > 50 ? big : small}>
            <label>{name} brings</label>
            {amount && <label> {amount} units of </label>}
            <label> {cake}</label>
            {amount > 50 && <label> WOW!!!!</label>}
            <br></br>
        </div> */}
        <div className={`message ${style}`}>
            {/* <div className={`message big`}> */}
            {/* <div className={'message ' + style}> */}
            {/* <div className={amount > 50 ? 'big' : 'small'}> */}
            <label>{name} brings</label>
            {amount && <label> {amount} units of </label>}
            <label> {cake}</label>
            {amount > 50 && <label> WOW!!!!</label>}
            <br></br>
        </div>
    </>
}