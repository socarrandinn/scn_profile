import { memo } from 'react';
import FontIconPicker from 'components/libs/FontIconPicker';
import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox } from '@dfl/mui-react-common';
import { ITeam } from 'modules/rrhh/team/interfaces';

interface TeamCellProps {
  data: ITeam;
}

const TeamCell = ({ data }: TeamCellProps) => {
  return (
        <FlexBox gap={1} alignItems='center'>
            <FontIconPicker
                readOnly
                value={data?.icon || 'SupervisedUserCircleIcon'}
                bgColor={data?.color || 'red'}
                shape={'square'}
                size='small'
                key={data?.icon}
            />
            <EditLink entityId={data._id as string}>{data?.name}</EditLink>
        </FlexBox>
  );
};

export default memo(TeamCell);
