import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { SvgCubanMap } from 'components/cubanMap/CubanMap';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';

export const StoreCubanMap = () => {
  const { t } = useTranslation('provider');
  const { store } = useStoreDetail();
  return (
    <FormPaper nm title={t('fields.basicInformation')}>
      <SvgCubanMap provinciasIds={store?.locations} />
    </FormPaper>
  );
};
