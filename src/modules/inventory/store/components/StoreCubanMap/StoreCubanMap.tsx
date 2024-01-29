import { FormPaper } from 'modules/common/components/FormPaper';
import { ConditionContainer } from '@dfl/mui-react-common';
import { Alert, AlertTitle, Grid } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import SvgCubanMap from 'components/cubanMap/CubanMap';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import CubaMapSkeleton from 'modules/inventory/store/components/StoreCubanMap/CubaMapSkeleton';

export const StoreCubanMap = () => {
  const { t } = useTranslation('provider');
  const { store, isLoading } = useStoreDetail();
  const { isOpen, onClose } = useToggle(true);
  let provincesCode: string[] = [];
  if (Array.isArray(store?.address?.state)) {
    provincesCode = store?.address?.state || [];
  }
  provincesCode.push(store?.address?.state || '');

  return (
    <FormPaper title={t('mapLocation')}>
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
