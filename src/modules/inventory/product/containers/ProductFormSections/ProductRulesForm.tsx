import { FormCheckBoxField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { ProductCheckboxWithInputRule } from 'modules/inventory/product/components/ProductCheckboxWithInputRule';
import { SelectProductShippingZones } from '../../components/SelectProductShippingZones';

type ProductRulesFormProps = {
  handleLimitByOrder: any;
  addPlace: any;
  provinceInEdit?: string;
  municipalityInEdit?: string;
};

const ProductRulesForm = ({
  handleLimitByOrder,
  addPlace,
  provinceInEdit,
  municipalityInEdit,
}: ProductRulesFormProps) => {
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
      name: 'rules.freeShipping',
      label: t('section.shipping.free'),
      options: {},
    },
    needCi: {
      componentType: 'checkbox',
      name: 'rules.needCi',
      label: t('section.shipping.needCi'),
      options: {},
    },
  };

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
      <Grid item xs={12}>
        <SelectProductShippingZones
          addPlace={addPlace}
          provinceInEdit={provinceInEdit}
          municipalityInEdit={municipalityInEdit}
        />
      </Grid>
    </Grid>
  );
};

export default ProductRulesForm;
