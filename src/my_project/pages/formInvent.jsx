import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStatus } from '../redux/Action';
import { addHash } from '../redux/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
//////////טופס הזמנה////////////
export function FormInvent(props) {
  const [open, setOpen] = React.useState(true);
  const user = useSelector(x => x.currentUser);
  const degemRechev = useSelector(x => x.degemRechev);
  const hashalot = useSelector(x => x.hashalot);
  const car = props.car;
  const navigate = useNavigate();
  const dis = useDispatch();
  const now = new Date();       
  const currentDateTimeISO = now.toISOString();   
  const formattedDateTime = currentDateTimeISO.slice(0, -1); // Remove the last character from the ISO string
  const [hash, setHash] = useState({ id: hashalot.length + 1, userId: user.password, licenseNumber: car.licenseNumber, dateH: formattedDateTime });
  const arr = degemRechev.filter(x => x.id === car.degemCode);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);

  const payAndNavigate = () => {
    dis(setStatus(car));
    dis(addHash(hash));
    navigate('/pay');
  }

  return (
    <div id="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="custom-modal">
          <h3> קוד ההשאלה שלך הוא: {hashalot.length + 1} שמור עליו עד להשבת הרכב</h3>
          <Typography className="MuiTypography-root" id="modal-modal-title" variant="h6" component="h2">
            <img src={car.pic} style={{ width: '18vw', height: 'auto' }}></img><br></br>  
            בחרת להשאיל רכב מספר {car.licenseNumber}<br></br>       
            {degemRechev.map(model => {
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
            מספר מושבים {car.seatsNumber}<br></br>
            <br></br>
          </Typography>
          <Typography className="MuiTypography-root" id="modal-modal-description" sx={{ mt: 4 }}>
            בנוסף, על מנת לשמור על תקינות הרכב ובטיחותו,<br></br>עליך לשלם כעת דמי פיקדון בסך 350 ש"ח שתזוכה עליהם בעת השבת הרכב במצב תקין
          </Typography> <br></br>
          <Button className="MuiButton-root" onClick={payAndNavigate}>לתשלום</Button>
        </Box>
      </Modal>
    </div>
  );
}
