import { memo } from 'react';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';

type ContainerSectionProps = {
  title?: string;
} & ChildrenProps;
const direction: any = { xs: 'column', md: 'row' };
const gap: any = { xs: 2, xl: 4 };
const ContainerSection = ({ title, children }: ContainerSectionProps) => {
  return (
    <div>
      {title && (
        <Typography variant={'h2'} mb={1}>
          {' '}
          {title}
        </Typography>
      )}
      <FlexBox gap={gap} flexDirection={direction} flexWrap={'wrap'}>
        {children}
      </FlexBox>
    </div>
  );
};

export default memo(ContainerSection);
