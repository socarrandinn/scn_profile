import { FormPaper } from 'modules/common/components/FormPaper';
import { ConditionContainer } from '@dfl/mui-react-common';
import { Alert, AlertTitle, Grid } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import SvgCubanMap from 'components/cubanMap/CubanMap';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import CubaMapSkeleton from 'modules/inventory/warehouse/components/StoreCubanMap/CubaMapSkeleton';

export const StoreCubanMap = () => {
  const { t } = useTranslation('provider');
  const { warehouse, isLoading } = useWarehouseDetail();
  const { isOpen, onClose } = useToggle(true);
  let provincesCode: string[] = [];
  if (Array.isArray(warehouse?.address?.state)) {
    provincesCode = warehouse?.address?.state || [];
  }
  provincesCode.push(warehouse?.address?.state || '');

  return (
    <FormPaper nm title={t('mapLocation')}>
      <ConditionContainer active={!isLoading} alternative={<CubaMapSkeleton />}>
        <Grid item xs={12} mb={2}>
          {isOpen ? (
            <Grid item xs={12} mb={2}>
              <Alert security='info' onClose={onClose}>
                <AlertTitle>{t('info')}</AlertTitle>
                {t('cubaMapDescription')}
              </Alert>
            </Grid>
          ) : undefined}
        </Grid>
        <SvgCubanMap selectedProvincesIds={provincesCode} />
      </ConditionContainer>
    </FormPaper>
  );
};
