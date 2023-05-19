import { memo } from 'react';
import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { ReactLink } from '@dfl/react-security';

interface TeamCellProps {
  data: ITeam;
  hideIcon?: boolean;
  external?: boolean;
  size?: 'small' | 'large' | 'medium';
}

const TeamCell = ({ data, hideIcon, external, size = 'medium' }: TeamCellProps) => {
  if (!data) return <></>

  return (
        <FlexBox gap={1} alignItems='center'>
            {!hideIcon && <IconPreview
                value={data?.icon || 'SupervisedUserCircleIcon'}
                bgColor={data?.color || 'success'}
                shape={'square'}
                size={size}
                key={data?.icon}
            />}
            {external ? <ReactLink to={`/rrhh/teams?edit=${data?._id as string}`} underline={'hover'}>
                    {data?.name}
                </ReactLink>
              : <EditLink entityId={data._id as string}>{data?.name}</EditLink>}
        </FlexBox>
  );
};

export default memo(TeamCell);
