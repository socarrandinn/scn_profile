import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomPaginate } from 'components/libs/CoustomPaginate';
import { useTablePagination } from '@dfl/mui-admin-layout';
import { Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import { useRobotTxtContext } from '../../contexts/RobotTxtContext';
import RobotTxtLogTimelineItem from './RobotTxtLogTimelineItem';
import RobotTxtHistorySkeleton from './RobotTxtHistorySkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Timeline } from 'modules/security/audit-logs/components/AuditLogHistoryChange/styled';

type Props = {
  resp?: boolean;
  onClose?: () => void;
};
const RobotTxtHistory = ({ resp = false, onClose }: Props) => {
  const { data, isLoading, error, handleCloseRobotTxt } = useRobotTxtContext();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();

  // close entity id
  useMemo(() => handleCloseRobotTxt?.(), [page, rowsPerPage]);

  if (isLoading || error) {
    return (
      <Container resp={resp}>
        <RobotTxtHistorySkeleton />
      </Container>
    );
  }

  if (isEmpty(data?.data)) {
    return (
      <Container resp={resp}>
        <Stack height={'100%'} justifyContent={'center'} minHeight={{ md: 500 }}>
          <NotSearchResult />
        </Stack>
      </Container>
    );
  }

  return (
    <Container resp={resp}>
      <Stack height={'100%'} justifyContent={'space-between'} minHeight={{ md: 500 }}>
        <Timeline>
          {data?.data?.map((log: any, index: number) => (
            <RobotTxtLogTimelineItem key={log?._id} auditLog={log} index={index} onClose={onClose} />
          ))}
        </Timeline>
        <CustomPaginate
          {...{
            total: data?.total || 0,
            isLoading: isLoading || false,
            rowsPerPage,
            page,
            onPageChange,
            onRowsPerPageChange,
            rowsPerPageOptions: [3, 5, 10],
          }}
        />
      </Stack>
    </Container>
  );
};

export default memo(RobotTxtHistory);

const Container = ({ resp, children }: Props & ChildrenProps) => {
  const { t } = useTranslation('seo');

  if (resp) {
    return (
      <Stack height={'100%'}>
        <Typography>{t('robot_txt.history')}</Typography>
        {children}
      </Stack>
    );
  }

  return (
    <FormPaper nm title={t('robot_txt.history')}>
      {children}
    </FormPaper>
  );
};
