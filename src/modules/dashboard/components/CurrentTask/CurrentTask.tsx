import { memo } from 'react'
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { SkeletonTable } from '@dfl/mui-admin-layout';
import { requestColumns } from 'modules/rrhh/time-off/constants/time-off.columns';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
  '.MuiTableCell-head': {
    color: 'transparent!important'
  },
  '.MuiSkeleton-root': {
    animation: 'none!important'
  }
}));
const CurrentTask = () => {
  return (
        <PaperTabView>
            <Container>
                <SkeletonTable columns={requestColumns}/>
            </Container>
        </PaperTabView>
  );
}

export default memo(CurrentTask);
