// CSS ייבוא של קובץ
import './style.css'

export const Inline = () => {

    const s = {
        border: 'double 5px red',
        width: '10vw',
        height: '10vw'
    }

    return <>
        {/* <div style={{ border: 'double 5px red', width: '10vw', height: '10vw' }}>
            I'm a div!!!!!!
        </div> */}
        {/* <div style={s}>
            I'm a div!!!!!!
        </div> */}
        {/* camelCase - className */}
        <div className="div">
            I'm a div!!!!!!
        </div>
    </>
}