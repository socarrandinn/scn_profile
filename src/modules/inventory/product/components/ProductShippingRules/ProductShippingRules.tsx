import { FormCheckBoxField, Small } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { map } from 'lodash';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from '../../contexts/ProductDetail';
import { ProductCheckboxWithInputRule } from '../ProductCheckboxWithInputRule';

const ProductShippingRules = ({ handleLimitByOrder }: { handleLimitByOrder: any }) => {
  const { t } = useTranslation('product');
  const { product } = useProductDetail();

  const RULES = {
    limitByAge: {
      componentType: 'checkbox',
      name: 'rules.limitByAge',
      label: t('section.shipping.olderAge'),
      options: {},
    },
    limitByOrder: {
      componentType: 'checkboxWithInput',
      label: t('section.shipping.limitByOrder'),
      name: 'rules.limitByOrder',
      options: {
        isOptionActive: !!product?.rules?.limitByOrder,
        handleFn: handleLimitByOrder,
        checkboxLabel: t('section.shipping.limitByOrder'),
        inputType: 'number',
        inputProps: {
          inputMode: 'numeric',
          pattern: '[0-9]*',
          min: 0,
          step: 1,
        },
      },
    },
    limitByDelivery: {
      componentType: 'checkbox',
      name: 'rules.limitByDelivery',
      label: t('section.shipping.limitByDelivery'),
      options: {},
    },
  };

  return (
    <Grid container paddingLeft={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Small>{t('section.shippingInfo.rules')}</Small>
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {map(RULES, (rule) => {
          switch (rule.componentType) {
            case 'checkbox':
              return (
                <Grid item xs={12} key={rule.name}>
                  <FormCheckBoxField name={rule.name} label={rule.label} />
                </Grid>
              );
            case 'checkboxWithInput':
              return (
                <ProductCheckboxWithInputRule
                  name={rule.name}
                  label={rule.label}
                  options={rule.options}
                  key={rule.name}
                />
              );
            default:
              break;
          }
        })}
      </Grid>
    </Grid>
  );
};

export default memo(ProductShippingRules);
