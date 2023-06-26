import React, { ComponentType } from 'react';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';

type Props = {
  value?: string;
  icon?: ComponentType;
  maxCharacters?: number;
  lineClamp?: number;
  hideIcon?: boolean;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
};

export const Label = ({
  value,
  hideIcon = false,
  iconStyle = {},
  textStyle = {},
  icon,
  maxCharacters = 0,
  lineClamp = 0,
}: Props) => {
  if (!value) {
    return (
            <FlexBox alignItems={'center'}>
                <em className='w-full'>-</em>
            </FlexBox>
    );
  }

  const IconComponent = icon || PlaceOutlined;

  return (
        <FlexBox alignItems={'center'} gap={1}>
            {!hideIcon && <IconComponent fontSize={'small'} sx={iconStyle}/>}
            <div className='w-full'>
                <LongText lineClamp={lineClamp} maxCharacters={maxCharacters} text={value || ''} sx={textStyle}/>
            </div>
        </FlexBox>
  );
};
