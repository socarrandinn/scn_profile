import { memo } from 'react';
import { Alert, AlertTitle, Chip, Stack, Typography } from '@mui/material';
import DetailHeaderAction from 'modules/inventory/product-stock/components/DetailHeaderAction/DetailHeaderAction';
import { useTranslation } from 'react-i18next';
import { ISuborderWhitError } from '../../interfaces';
type DataErrorProps = {
  dataError: any[];
  onInitialClose: () => void;
};

const OrderWithErrors = ({ dataError, onInitialClose }: DataErrorProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='subOrder:statusImport.summary.error.dataError' />
      {dataError && dataError.map((item, index) => <ReasonError key={index} error={item} />)}
    </Stack>
  );
};

export default memo(OrderWithErrors);

const ReasonError = ({ error }: { error: ISuborderWhitError }) => {
  const { t } = useTranslation('subOrder');
  return (
    <Stack
      sx={{
        gap: 1,
        flexDirection: 'column',
      }}
    >
      <Alert severity='error' icon={<></>}>
        <AlertTitle>
          {error?.code && (
            <Stack sx={{ flexDirection: 'row', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Chip size='small' color='error' variant='outlined' label={t('common:code')} />
              {error?.code}
            </Stack>
          )}
        </AlertTitle>

        <Stack gap={1} mt={1}>
          <Typography>
            <strong> {t('reason')}</strong> {error?.details?.[0]?.reason}
          </Typography>
          <Typography>
            <strong>{t('value')}</strong> {error?.details?.[0]?.value}
          </Typography>
        </Stack>
      </Alert>
    </Stack>
  );
};
