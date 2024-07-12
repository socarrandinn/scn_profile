import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import ProductDetailRulesUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailRulesUpdateContainer';
import { POLICY_ENUM } from '../../interfaces/IProductCreate';
import { RegionListCell } from '../ProductGeneralShippingInfo/RegionListCell';

const ProductGeneralRulesInfo = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

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

  if (isOpen) {
    return (
      <FormPaper
        title={t('section.shippingInfo.rules')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <ProductDetailRulesUpdateContainer
          initValue={{
            _id: product?._id,
            rules: product?.rules,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.shippingInfo.rules')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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
