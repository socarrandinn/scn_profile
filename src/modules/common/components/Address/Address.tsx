import React, { ComponentType } from 'react';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { getAddress } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import { IAddress } from 'modules/common/interfaces';

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
  value: IAddress;
  showStreet?: boolean;
  showCountry?: boolean;
  lineClamp?: number;
  maxCharacters?: number;
  icon?: ComponentType;
  hideIcon?: boolean;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}) => {
  if (!value?.state) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-{"'"}</em>
      </FlexBox>
    );
  }

  const IconComponent = icon || PlaceOutlined;
  const location = getAddress(value, { showStreet, showCountry });

  return (
    <FlexBox alignItems={'center'}>
      {!hideIcon && <IconComponent fontSize={'small'} sx={iconStyle} />}
      <em className='w-full'>
        <LongText lineClamp={lineClamp} maxCharacters={maxCharacters} text={location} sx={textStyle} />
      </em>
    </FlexBox>
  );
};
