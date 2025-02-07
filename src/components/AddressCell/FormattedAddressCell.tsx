import { LongText } from '@dfl/mui-react-common';
import { PlaceOutlined } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { COUNTRIES } from 'constants/COUNTRIES';
import { IAddress } from 'modules/common/interfaces';
import { ComponentType, memo, useMemo } from 'react';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { getFormatterInternacionalAddress } from 'utils/address-geo';
type Props = {
  address: IAddress;
  lineClamp?: number;
  icon?: ComponentType;
  hideIcon?: boolean;
};

const FormattedAddressCell = ({ address, lineClamp = 2, hideIcon, icon }: Props) => {
  const IconComponent = icon || PlaceOutlined;

  const _formattedAddress = useMemo(() => {
    if (MS_LOCATION_CONFIG.isCuban) {
      return address?.formattedAddress;
    }
    const country = COUNTRIES?.find((c) => c.code === address?.country);
    return getFormatterInternacionalAddress(address, country?.name);
  }, [address]);
  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={1} sx={{ maxWidth: 300 }}>
      {!hideIcon && <IconComponent fontSize={'small'} />}
      <LongText text={_formattedAddress} lineClamp={lineClamp} />
    </Stack>
  );
};

export default memo(FormattedAddressCell);
