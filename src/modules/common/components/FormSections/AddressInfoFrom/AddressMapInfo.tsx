import { Alert, Box, Collapse } from '@mui/material';
import { useState } from 'react';

const AddressMapInfo = () => {
  const [close, setClose] = useState(true);
  return (
    <Box>
      <Collapse in={close}>
        <Alert
          security='info'
          onClose={() => {
            setClose(false);
          }}
        >
          La ubicacion que nos has proporcionado se ha señalizado en el mapa. Por favor revisa y ajusta si es necesario.
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AddressMapInfo;
