import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { DialogForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import AuditLogHistoryChangeContainer from 'modules/security/audit-logs/containers/AuditLogHistoryChangeContainer';
import { auditLogFilters } from 'modules/security/audit-logs/constants';
import { useFindAuditLogsByEntity } from 'modules/security/audit-logs/hooks/useFindAuditLogsByEntity';
import { useSearchParamsChange } from '@dfl/react-security';

type Props = {
  loadingInitData?: boolean;
  title?: string;
};

const PaymentMethodHistorialModal = ({ title = 'role:tabs.historyChange', loadingInitData }: Props) => {
  const { t } = useTranslation('paymentSettings');
  const { value, clean } = useSearchParamsChange('method');

  const entityId = value;

  const handleClose = useCallback(() => {
    entityId && clean();
  }, [entityId, clean]);

  return (
    <DialogForm
      open={!!entityId}
      fullWidth
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      maxWidth={'lg'}
      aria-labelledby={'paymentSettings-creation-title'}
    >
      <DialogContent>
        <TableProvider id={'payment-method-audit-log'} filters={auditLogFilters}>
          <AuditLogEntityProvider entityId={entityId as string} useHook={useFindAuditLogsByEntity}>
            <AuditLogHistoryChangeContainer />
          </AuditLogEntityProvider>
        </TableProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:close')}</Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PaymentMethodHistorialModal);
