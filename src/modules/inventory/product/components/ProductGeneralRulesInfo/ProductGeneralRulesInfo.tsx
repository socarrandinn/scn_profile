import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailRulesUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailRulesUpdateContainer';
import { POLICY_ENUM } from '../../interfaces/IProductCreate';
import { RegionListCell } from '../ProductGeneralShippingInfo/RegionListCell';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ProductGeneralRulesInfo = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_8 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_8'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_8'), [onOneClose]);

  const { t: translateProvider } = useTranslation('provider'); // Move useTranslation outside

  const getArray = (data: IProduct): any[] => {
    const { freeShipping, limitByAge, limitByOrder, needCi, deliveryRules } = data?.rules || {};

    const limitByAgeText = limitByAge ? translateProvider('rules.yes') : translateProvider('rules.no');
    const freeShippingText = freeShipping ? translateProvider('rules.yes') : translateProvider('rules.no');
    const needCiText = needCi ? translateProvider('rules.yes') : translateProvider('rules.no');

    const array = [
      { label: 'rules.olderAge', value: limitByAgeText },
      { label: 'rules.limitByDelivery', value: limitByOrder },
      { label: 'rules.free', value: freeShippingText },
      { label: 'rules.needCi', value: needCiText },
      {
        label:
          deliveryRules?.policy === POLICY_ENUM.ALLOW
            ? 'product:section.shippingInfo.allowedZones'
            : 'product:section.shippingInfo.deniedZones',
        value: <RegionListCell regions={deliveryRules?.regions} />,
      },
    ];

    return array;
  };

  if (open) {
    return (
      <FormPaper
        title={t('section.shippingInfo.rules')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ProductDetailRulesUpdateContainer
          initValue={{
            _id: product?._id,
            rules: product?.rules,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.shippingInfo.rules')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(product as IProduct) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralRulesInfo);
