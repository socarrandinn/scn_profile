import { memo } from 'react';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { ReactLink } from '@dfl/react-security';
import Box from '@mui/material/Box';

interface TeamCellProps {
  data: ITeam;
  hideIcon?: boolean;
  link?: boolean;
  size?: 'small' | 'large' | 'medium' | number;
  className?: string;
}

const TeamCell = ({ className, data, hideIcon, link, size = 42 }: TeamCellProps) => {
  if (!data) return <></>;

  return (
    <FlexBox gap={1} alignItems='center' className={className}>
      {!hideIcon && (
        <IconPreview
          value={data?.icon || 'SupervisedUserCircleIcon'}
          bgColor={data?.color || 'success'}
          shape={'square'}
          size={size}
          key={data?.icon}
        />
      )}
      {link ? (
        <ReactLink to={`/store/employee/teams/${data?._id as string}`} underline={'hover'}>
          {data?.name}
        </ReactLink>
      ) : (
        <Box>{data?.name}</Box>
      )}
    </FlexBox>
  );
};

export default memo(TeamCell);
