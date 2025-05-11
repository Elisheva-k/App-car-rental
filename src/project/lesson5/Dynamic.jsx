export const Dynamic = props => {

    const { num } = props

    const s = num >= 10
        ? { color: 'red', fontSize: '100px' }
        : { color: 'blue', fontSize: '50px' }

    return <>
        {/* <p
            style={num >= 10
                ? { color: 'red', fontSize: '100px' }
                : { color: 'blue', fontSize: '50px' }
            }
        >The num is: {num}</p> */}

        {/* <p style={s}
        >The num is: {num}</p> */}

        <p className={num >= 10 ? 'big' : 'small'}
        >The num is: {num}</p>
    </>
}