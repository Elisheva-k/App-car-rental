

import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Pay} from "./pay"
import {setStatus} from '../redux/Action'
import {addHash} from '../redux/Action'

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export function FormInvent(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
  const user = useSelector(x => x.currentUser)
  const degemRechev = useSelector(x => x.degemRechev)
  const car = props.car
  const navigate = useNavigate()
  const dis = useDispatch() 
  const [hash,sethash]=useState({ id: 6, userId:user.password, licenseNumber: car.licenseNumber , date: {day: 1, month: 6, year: 2000}, time: {hour:8,minute:53}})
  const arr=degemRechev.filter((x => x.id==car.degemCode));
  console.log(arr);

  //     <div key={index}>
        //         <label>{item.company}</label>:חברה <label>{item.model}</label> :מודל
        //                </div>
        //       }         
        // )} 
  const aaa = () => {
    debugger
    dis(setStatus(car))
    dis(addHash(hash))
    // console.log(car.isAvilable)
        navigate('/pay')
      }
  return (
    <div id="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
              {/* { id: '1', licenseNumber: '12345678', degemCode: '6', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p1.jpg`
        , year: '2000', girT: '2', driveT: '5', price: '25', kamash: '20', litersNow: '70', street: 'בבא סאלי', city: 'ביתר', isAvilable: 'false' }, */}
        <Box sx={style} className="custom-modal">
        <h3> קוד ההשאלה שלך הוא: 6 שמור עליו עד להשבת הרכב</h3>
          <Typography className="MuiTypography-root" id="modal-modal-title" variant="h6" component="h2">
          <img src={car.pic} style={{ width: '18vw', height: 'auto' }}></img><br></br>  
          בחרת להשאיל רכב מספר{car.licenseNumber}<br></br>       
          {degemRechev.map((model) => {
            if (model.id === car.degemCode) {
              return (
                <div key={model.id}>
                  {model.model} דגם<br></br>
                   {model.company} יצרן
                </div>
              );
            }
            return null;
          })}
          מספר מושבים{car.seatsNumber}<br></br>
          <br></br>
         </Typography>
          <Typography className="MuiTypography-root" id="modal-modal-description" sx={{ mt:4}}>
          בנוסף, על מנת לשמור על תקינות הרכב ובטיחותו,<br></br>עליך לשלם כעת דמי פיקדון בסך 350 ש"ח שתזוּכֶה עליהם בעת השבת הרכב במצב תקין</Typography> <br></br>
          <Button className="MuiButton-root"onClick={aaa}>לתשלום</Button>
        </Box>
      </Modal>
    </div>
  );
}