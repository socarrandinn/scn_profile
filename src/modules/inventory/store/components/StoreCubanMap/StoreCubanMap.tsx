import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { SvgCubanMap } from 'components/cubanMap/CubanMap';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { ConditionContainer } from '@dfl/mui-react-common';
import CubaMapSkeleton from 'modules/inventory/store/components/StoreCubanMap/CubaMapSkeleton';

export const StoreCubanMap = () => {
  const { t } = useTranslation('provider');
  const { store, isLoading } = useStoreDetail();
  let provincesCode: string[] = [];
  if (Array.isArray(store?.address?.state)) {
    provincesCode = store?.address?.state || [];
  }
  provincesCode.push(store?.address?.state || '');

  return (
    <FormPaper title={t('mapLocation')}>
      <ConditionContainer active={!isLoading} alternative={<CubaMapSkeleton />}>
        <SvgCubanMap provinciasIds={provincesCode} />
      </ConditionContainer>
    </FormPaper>
  );
};
