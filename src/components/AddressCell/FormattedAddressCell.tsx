import { LongText } from '@dfl/mui-react-common';
import { PlaceOutlined } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { COUNTRIES } from 'constants/COUNTRIES';
import { IAddress } from 'modules/common/interfaces';
import { ComponentType, memo, useMemo } from 'react';
import { getFormatterAddress } from 'utils/address-geo';

type Props = {
  address: IAddress;
  lineClamp?: number;
  icon?: ComponentType;
  hideIcon?: boolean;
};

const FormattedAddressCell = ({ address, lineClamp = 3, hideIcon, icon }: Props) => {
  const IconComponent = icon || PlaceOutlined;

  const _formattedAddress = useMemo(() => {
    const country = COUNTRIES?.find((c) => c.code === address?.country);
    return getFormatterAddress(address, country?.name);
  }, [address]);

  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
      {!hideIcon && <IconComponent fontSize={'small'} />}
      <LongText text={_formattedAddress} lineClamp={lineClamp} />
    </Stack>
  );
};

export default memo(FormattedAddressCell);
