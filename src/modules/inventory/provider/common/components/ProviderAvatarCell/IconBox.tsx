import { Stack } from '@mui/material';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';
import { memo } from 'react';

type IconBoxProps = { icon: any; large?: boolean };

const IconBox = ({ icon: Icon, large }: IconBoxProps) => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      position={'absolute'}
      top={-10}
      right={-2}
      color={'white'}
      bgcolor={LOGISTIC.COLOR}
      width={large ? '36px' : '24px'}
      height={large ? '36px' : '24px'}
      borderRadius={1}
    >
      <Icon sx={{ fontSize: large ? 24 : 16 }} />
    </Stack>
  );
};

export default memo(IconBox);
