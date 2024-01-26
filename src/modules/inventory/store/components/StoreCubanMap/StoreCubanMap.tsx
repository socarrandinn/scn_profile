import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { SvgCubanMap } from 'components/cubanMap/CubanMap';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';

export const StoreCubanMap = () => {
  const { t } = useTranslation('provider');
  const { store } = useStoreDetail();
  let provincesCode: string[] = [];
  if (Array.isArray(store?.address?.state)) {
    provincesCode = store?.address?.state || [];
  }
  provincesCode.push(store?.address?.state || '');

  return (
    <FormPaper title={t('mapLocation')}>
      <SvgCubanMap provinciasIds={provincesCode} />
    </FormPaper>
  );
};
