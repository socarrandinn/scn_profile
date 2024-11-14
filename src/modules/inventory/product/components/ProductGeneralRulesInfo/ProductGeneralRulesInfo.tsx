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
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';

const ProductGeneralRulesInfo = () => {
  const { t } = useTranslation(['product', 'provider']);
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_8 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_8'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_8'), [onOneClose]);

  const isAllow = useMemo(
    () => product?.rules?.deliveryRules?.policy === POLICY_ENUM.ALLOW,
    [product?.rules?.deliveryRules?.policy],
  );

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
    <FormPaper
      mbHeader={'0px'}
      title={t('section.shippingInfo.rules')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArray(product as IProduct, t) || []}
        doubleColumnData={getDoubleColumnArray(product as IProduct, t) || []}
        isLoading={isLoading}
        error={error}
      />
      <BasicTableHeadless
        columns={simpleColumns}
        data={getRegionArray(product as IProduct, isAllow) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ProductGeneralRulesInfo);

const getArray = (data: IProduct, t: any): any[] => {
  const { freeShipping, limitByAge, limitByOrder, needCi } = data?.rules || {};

  const limitByAgeText = limitByAge ? t('provider:rules.yes') : t('provider:rules.no');
  const freeShippingText = freeShipping ? t('provider:rules.yes') : t('provider:rules.no');
  const needCiText = needCi ? t('provider:rules.yes') : t('provider:rules.no');

  const array = [
    { label: 'rules.olderAge', value: limitByAgeText },
    { label: 'rules.limitByDelivery', value: limitByOrder },
    { label: 'rules.free', value: freeShippingText },
    { label: 'rules.needCi', value: needCiText },
  ];

  return array;
};

const getRegionArray = (data: IProduct, isAllow: boolean): any[] => {
  const { deliveryRules } = data?.rules || {};

  const array = [
    {
      label: isAllow ? 'product:section.shippingInfo.allowedZones' : 'product:section.shippingInfo.deniedZones',
      value: <RegionListCell regions={deliveryRules?.regions} />,
    },
  ];

  return array;
};

const getDoubleColumnArray = (data: IProduct, t: any): any[] => {
  const { freeShipping, limitByAge, limitByOrder, needCi } = data?.rules || {};

  const limitByAgeText = limitByAge ? t('provider:rules.yes') : t('provider:rules.no');
  const freeShippingText = freeShipping ? t('provider:rules.yes') : t('provider:rules.no');
  const needCiText = needCi ? t('provider:rules.yes') : t('provider:rules.no');

  const array = [
    { label: 'rules.olderAge', value: limitByAgeText, label2: 'rules.limitByDelivery', value2: limitByOrder },
    { label: 'rules.free', value: freeShippingText, label2: 'rules.needCi', value2: needCiText },
  ];

  return array;
};
