import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function EndScreen({winner}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(()=>{
    if (winner === "B" || winner === "R") {
        setOpen(true);
    }
  }, [winner])

  return (
    <div>
      <Modal
        open={open}
        onClick={handleClose}
      >
        <Box sx={style}>
            <p className='flex justify-center text-4xl'>
                Player {winner === "B" ? <p className='text-blue-500 px-2'> BLUE </p> : <p className='text-red-500 px-2'> RED </p>} won the game!
            </p>
            <p className='italic text-xl'>
                Click anywhere to close this window
            </p>
        </Box>
      </Modal>
    </div>
  );
}
