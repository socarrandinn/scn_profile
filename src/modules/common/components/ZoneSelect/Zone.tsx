import React, { ComponentType, useMemo } from 'react';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { getAddress } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import { IAddress } from 'modules/common/interfaces';
import { toAddressString } from 'utils/address';

export const AddressValue = ({
  value,
  showStreet = false,
  showCountry = false,
  lineClamp = 0,
  maxCharacters = 0,
  hideIcon = false,
  iconStyle = {},
  textStyle = {},
  icon,
}: {
  value: IAddress | string;
  showStreet?: boolean;
  showCountry?: boolean;
  lineClamp?: number;
  maxCharacters?: number;
  icon?: ComponentType;
  hideIcon?: boolean;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}) => {
  const hasValue = useMemo(() => (typeof value === 'string' ? value : value?.state), [value]);

  if (!hasValue) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-</em>
      </FlexBox>
    );
  }

  const IconComponent = icon || PlaceOutlined;
  const location = typeof value === 'string' ? value : toAddressString(value);

  return (
    <FlexBox alignItems={'center'}>
      {!hideIcon && <IconComponent fontSize={'small'} sx={iconStyle} />}
      <div className='w-full'>
        <LongText lineClamp={lineClamp} maxCharacters={maxCharacters} text={location} sx={textStyle} />
      </div>
    </FlexBox>
  );
};
