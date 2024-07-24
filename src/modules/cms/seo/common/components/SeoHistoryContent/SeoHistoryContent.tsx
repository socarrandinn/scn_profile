import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomPaginate } from 'components/libs/CoustomPaginate';
import { useTablePagination } from '@dfl/mui-admin-layout';
import { Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import SeoHistoryTimelineItem from './SeoHistoryTimelineItem';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Timeline } from 'modules/security/audit-logs/components/AuditLogHistoryChange/styled';
import AuditLogHistoryChangeSkeleton from 'modules/security/audit-logs/components/AuditLogHistoryChange/AuditLogHistoryChangeSkeleton';
import { useAuditLogEntityContext } from 'modules/security/audit-logs/context/AuditLogEntityContext';

type Props = {
  resp?: boolean;
  onClose?: () => void;
};
const SeoHistoryContent = ({ resp = false, onClose }: Props) => {
  const { data, isLoading, error } = useAuditLogEntityContext();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();

  if (isLoading || error) {
    return (
      <Container resp={resp}>
        <AuditLogHistoryChangeSkeleton />
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
            <SeoHistoryTimelineItem key={log?._id} auditLog={log} index={index} onClose={onClose} />
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

export default memo(SeoHistoryContent);

const Container = ({ resp, children }: Props & ChildrenProps) => {
  const { t } = useTranslation('auditLog');

  if (resp) {
    return (
      <Stack height={'100%'}>
        <Typography>{t('title')}</Typography>
        {children}
      </Stack>
    );
  }

  return (
    <FormPaper nm title={t('title')}>
      {children}
    </FormPaper>
  );
};
