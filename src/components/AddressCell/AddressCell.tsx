import React, { ComponentType, memo, useMemo } from 'react';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import { IAddress } from 'modules/common/interfaces';
import { toAddressStringByCodes } from 'utils/address';

const AddressCell = ({
  address,
  lineClamp = 0,
  maxCharacters = 0,
  hideIcon = false,
  iconStyle = {},
  textStyle = {},
  icon,
}: {
  address: IAddress | string;
  showStreet?: boolean;
  showCountry?: boolean;
  lineClamp?: number;
  maxCharacters?: number;
  icon?: ComponentType;
  hideIcon?: boolean;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}) => {
  const hasValue = useMemo(() => (typeof address === 'string' ? address : address?.state), [address]);

  if (!hasValue) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-</em>
      </FlexBox>
    );
  }

  const IconComponent = icon || PlaceOutlined;
  const location = typeof address === 'string' ? address : toAddressStringByCodes(address);

  return (
    <FlexBox alignItems={'center'}>
      {!hideIcon && <IconComponent fontSize={'small'} sx={iconStyle} />}
      <div className='w-full'>
        <LongText lineClamp={lineClamp} maxCharacters={maxCharacters} text={location} sx={textStyle} />
      </div>
    </FlexBox>
  );
};

export default memo(AddressCell);
