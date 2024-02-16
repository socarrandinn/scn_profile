import { Stack } from '@mui/material';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';
import { memo } from 'react';

const IconBox = ({ icon: Icon }: { icon: any }) => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      position={'absolute'}
      top={-10}
      right={-2}
      color={'white'}
      bgcolor={LOGISTIC.COLOR}
      width={'24px'}
      height={'24px'}
      borderRadius={1}
    >
      <Icon sx={{ fontSize: 16 }} />
    </Stack>
  );
};

export default memo(IconBox);
