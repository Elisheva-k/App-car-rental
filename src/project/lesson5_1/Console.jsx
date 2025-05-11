import './style.css'

export const Console = () => {

    return <>
        {/* <Error message={'Assignment to a constant variable'}></Error> */}
        {/* <Warning message={'Each child in a list should have a unique key prop'}></Warning> */}
        {/* <Info message={'Hello'}></Info> */}

        <Message type="error" message={'Assignment to a constant variable'}></Message>
        <Message type="warning" message={'Each child in a list should have a unique key prop'}></Message>
        <Message type="info" message={'Hello'}></Message>
    </>
}

// יצרנו קומפוננטה גלובלית לכל ההודעות
const Message = (props) => {

    const { message, type } = props

    return <>
        <p className={`message ${type}`}>{message}</p>
        {/* <p className={'message ' + type}>{message}</p> */}
    </>
}

const Error = (props) => {

    const { message } = props

    return <>
        <p className="message error">{message}</p>
    </>

}

const Warning = (props) => {

    const { message } = props

    return <>
        <p className="message warning">{message}</p>
    </>

}

const Info = (props) => {

    const { message } = props

    return <>
        <p className="message info">{message}</p>
    </>

}