
export const Details = (props) => {

    const { num, action, type } = props

    return <>
        <h4>הזמנת {num} כרטיסים לאטרקציה {action} / {type} </h4>
    </>
}