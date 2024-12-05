import { Grid, Stack } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { IPriceValue, IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { calculateFinalPrice } from 'modules/inventory/product/utils';
import { ReadOnlyCurrencyField } from 'modules/inventory/product/components/ReadOnlyCurrencyField';
import { useDFLForm } from '@dfl/mui-react-common';
import FormOtherCostInputArray from 'modules/inventory/product/components/FormOtherCostInput/FormOtherCostInputArray';
import LogisticWarehouseView from '../../components/ProductPrice/LogisticWarehouseView/LogisticWarehouseView';
import TooltipError from '../../components/ProductPrice/LogisticWarehouseView/TooltipError';
import { usePriceCommission } from '../../hooks/usePriceCommission';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

type PriceFormProps = {
  priceDetails?: IProductPriceDetails;
  logisticPriceType?: string;
  shippingPriceType?: string;
  commercialPriceType?: string;
  setValue: any;
  editFinalPrice?: number;
};
const PricesForm = ({
  shippingPriceType,
  setValue,
  logisticPriceType,
  commercialPriceType,
  editFinalPrice,
  priceDetails,
}: PriceFormProps) => {
  const { t } = useTranslation('product');
  const { checkCommissionLogistic } = usePriceCommission();
  const { control } = useDFLForm();
  const price = useWatch({ control, name: 'priceDetails' }) as IProductPriceDetails;

  const { commissionError, hazWarehouses } = useMemo(() => {
    const hazWarehouses = (price?.distribution?.warehouses?.length || 0) > 0;
    const commissionError = price?.distribution?.warehouses
      ?.map((warehouse) =>
        checkCommissionLogistic(
          warehouse,
          price?.distribution?.logistic as IPriceValue,
          price?.values?.totalCost as number,
        ),
      )
      .includes(true);

    return {
      commissionError,
      hazWarehouses,
    };
  }, [
    checkCommissionLogistic,
    price?.distribution?.logistic,
    price?.distribution?.warehouses,
    price?.values?.totalCost,
  ]);

  if (!priceDetails || !priceDetails.distribution) return null;
  const cost = price?.distribution?.cost?.value || 0;
  const finalPrice =
    editFinalPrice !== undefined ? editFinalPrice : calculateFinalPrice(priceDetails.distribution, cost);

  return (
    <Grid container spacing={{ xs: 2 }}>
      <Grid item xs={12} md={6}>
        <FormCurrencyField
          fullWidth
          required
          defaultValue={0}
          name='priceDetails.distribution.cost.value'
          label={t('section.prices.cost')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={shippingPriceType}
          fullWidth
          name='priceDetails.distribution.shipping'
          label={t('section.prices.shipping')}
          size='medium'
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack gap={2} flexDirection={'row'}>
          {hazWarehouses && (
            <LogisticWarehouseView
              warehouses={priceDetails.distribution?.warehouses || []}
              title={t('seeCommissionWarehouse')}
              size='medium'
              fullWidth
              price={price}
            />
          )}

          <FormDiscountField
            initPriceType={logisticPriceType}
            fullWidth
            name='priceDetails.distribution.logistic'
            label={t('section.prices.logistic')}
            size='medium'
            CommissionError={commissionError && <TooltipError note='errors.percentAllGlobal' />}
          />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={commercialPriceType}
          fullWidth
          name='priceDetails.distribution.commercial'
          label={t('section.prices.commercial')}
          size='medium'
        />
      </Grid>

      <Grid item xs={12}>
        <ReadOnlyCurrencyField
          label={t('section.prices.price')}
          value={finalPrice}
          id='product-final-price'
          size='medium'
        />
      </Grid>
      <Grid item xs={12} marginTop={0.5}>
        <FormOtherCostInputArray
          setValue={setValue}
          name='priceDetails.distribution.otherCost'
          label={t('section.prices.otherCost')}
        />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
