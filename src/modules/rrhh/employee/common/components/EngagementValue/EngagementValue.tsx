import React, { ComponentType, memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { Engagement } from 'modules/rrhh/employee/management/constants';
import HardwareIcon from '@mui/icons-material/Hardware';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  value?: Engagement;
  icon?: ComponentType;
  hideIcon?: boolean;
  iconStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  className?: string;
};

export const EngagementValue = ({
  value,
  hideIcon = false,
  iconStyle = {},
  textStyle = {},
  icon,
  className = '',
}: Props) => {
  const { t } = useTranslation('employee');

  if (!value) {
    return <></>;
  }

  const IconComponent = icon || HardwareIcon;

  return (
    <FlexBox alignItems={'center'} gap={1} className={className}>
      {!hideIcon && <IconComponent fontSize={'small'} sx={iconStyle} />}
      <Typography sx={textStyle}>{t(`engagement.${value}`)}</Typography>
    </FlexBox>
  );
};

export default memo(EngagementValue);
