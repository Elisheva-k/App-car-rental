import { useRef, useState } from "react"
import { Card } from "./Card"

export const Login = () => {

    const [flag, setFlag] = useState(false)
    const refSender = useRef()
    const refAddressee = useRef()
    const refGender = useRef()
    const refSingle = useRef()
    const refType = useRef()
    const refWishes = useRef()
    const refMoreWishes = useRef()

    const send = () => {
        setFlag(true)
    }

    return <>
        <div className="form">
            <label>Sender</label>
            <input type="text" placeholder="Input your name" ref={refSender} />
            <label>Addressee</label>
            <input type="text" placeholder="Input the addressee" ref={refAddressee} />
            <label>Gender</label>
            <label htmlFor="male">Male</label>
            <input type="radio" name="male" id="male" ref={refGender} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="male" id="female" ref={refGender} />

            <label htmlFor="single">Single</label>
            <input type="radio" name="s" id="single" ref={refSingle} />
            <label htmlFor="ploral">Ploral</label>
            <input type="radio" name="s" id="ploral" ref={refSingle} />

            <label>Type</label>
            <select id="type" ref={refType}>
                <option value="Baby boy">Baby boy</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Bar Mitzva">Bar Mitzva</option>
                <option value="Trip">Trip</option>
            </select>
            <label>Wishes</label>
            <input type="text" placeholder="Input your wishes" ref={refWishes} />
            <label>More Wishes</label>
            <input type="text" placeholder="optional! Input More wishes" ref={refMoreWishes} />
            <input type="submit" value="send" onClick={send} />
        </div>
        {flag == true &&
            <Card sender={refSender.current.value}
                addressee={refAddressee.current.value}
                gender={refGender.current.value}
                single={refSingle.current.value}
                type={refType.current.value}
                wishes={refWishes.current.value}
                moreWishes={refMoreWishes.current.value}>
            </Card>}
    </>



}