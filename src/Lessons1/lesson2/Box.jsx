export function Box(props) {

    const { desc, length, width, height } = props

    function volume() {
        return length * width * height
    }

    function area() {
        return length * width * 2 + width * height * 2 + height * length * 2
    }

    // const a = volume()

    // if (a > 200)
    //     return (
    //         <>
    //             <div>box: length:{length}, width:{width}, height:{height}</div>
    //             <p>big box!</p>
    //         </>
    //     )
    // else return (
    //     <>
    //         <div>box: length:{length}, width:{width}, height:{height}</div>
    //         <p>small box!</p>
    //     </>
    // )

    return <>
        <h5>~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
        <h3>{desc}</h3>
        {desc != undefined && <h3>{desc.length}</h3>}
        {desc && <h3>{desc.length}</h3>}
        {/* HTML בתוך קוד JS הכנסת קוד של  */}
        {/* באמצעות סוגריים מסולסלות */}
        <div>box: length:{length}, width:{width}, height:{height}</div>
        {/* תנאי בוליאני */}
        {volume() > 200
            // סימן שאלה - אם התנאי התקיים
            ? <p>big box!</p>
            // נקודתיים - אם לא התקיים
            : <p>small box!</p>}
        {/*  */}
        {/* {area() > 200 && <Message></Message>} */}
        {area() > 200 && <>
            <h4>cannot generate this box!!!!</h4>
            <p>may use a smaller box🤔</p>
        </>}
        <h5>~~~~~~~~~~~~~~~~~~~~~~~~~~~</h5>
    </>
}

Box.defaultProps = {
    desc: 'Annonymous',
    length: 1,
    width: 1,
    height: 1
}

function Message() {
    return <>
        <h4>cannot generate this box!!!!</h4>
        <p>may use a smaller box🤔</p>
    </>
}
