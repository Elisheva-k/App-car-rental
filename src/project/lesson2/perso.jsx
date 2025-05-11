import './style.css'

export const List2 = () => {

 const users= [
    { id: '1', username: 'אלישבע', email: 'E@gmail.com', password: '1111', phone: '0533171767', cerditCard: '1111111111111111', validity: '02/24', cvv: '325', eT: '3', userT: '2' },
    { id: '2', username: 'נחמי', email: 'N@gmail.com', password: '2222', phone: '0556762957', cerditCard: '2222222222222222', validity: '02/25', cvv: '252', eT: '3', userT: '1' },
    { id: '3', username: 'אהובה', email: 'A@gmail.com', password: '3333', phone: '0527653046', cerditCard: '33333333333333333', validity: '02/26', cvv: '474', eT: '3', userT: '1' },
    { id: '4', username: 'בינה', email: 'B@gmail.com', password: '4444', phone: '0527653044', cerditCard: '444444444444444444', validity: '02/27', cvv: '332', eT: '3', userT: '1' },
    { id: '5', username: 'גילה', email: 'G@gmail.com', password: '5555', phone: '0527653045', cerditCard: '555555555555555555', validity: '02/28', cvv: '152', eT: '3', userT: '1' },
    { id: '6', username: 'דיצהלה', email: 'D@gmail.com', password: '6666', phone: '0504102076', cerditCard: '66666666666666666', validity: '02/29', cvv: '201', eT: '3', userT: '1' },
    { id: '7', username: 'שירה', email: 'S@gmail.com', password: '7777', phone: '0504137300', cerditCard: '777777777777777777', validity: '02/30', cvv: '787', eT: '3', userT: '1' },
    { id: '8', username: 'אילה', email: 'AYALA@gmail.com', password: '8888', phone: '055267953', cerditCard: '88888888888888888', validity: '02/31', cvv: '965', eT: '3', userT: '1' },

]
return<>
{users.map((item, index) =>
            <F username={item.username} email={item.email} key={index}></F>
        )}
</>
}
export const F = (props) => {

    const {username, email } = props

    return <>
        <p className='small'>{username} email {email}</p>
    </>
}
