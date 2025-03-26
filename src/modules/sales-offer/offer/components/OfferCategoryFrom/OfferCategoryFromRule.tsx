import { Alert, Button, Divider, Grid, Stack } from '@mui/material';
import { memo, useEffect, useMemo, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray } from 'react-hook-form';
import { FromAsyncSelectCategory } from '../FromAsyncSelectCategory';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import OfferCategoryFromList from './OfferCategoryFromList';
import useAmountCategoryForm from 'modules/sales-offer/common/hooks/useAmountCategoryForm';

type OfferCategoryFromRuleProps = {
  section: boolean;
  control: any;
  name: string;
  errors: {
    rulesAmountsCategory: {
      value: {
        message: string;
        type: string;
      };
      type: string;
    };
  };
};

const OfferCategoryFromRule = ({ section, control: mainControl, name, errors }: OfferCategoryFromRuleProps) => {
  const options = useMemo(() => [OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE], []);
  const { t } = useTranslation('offerOrder');

  const {
    fields,
    remove: removeRule,
    append: appendRule,
  } = useFieldArray({
    control: mainControl,
    name: `${name}.value`,
  });

  const { control, onSubmit } = useAmountCategoryForm(appendRule);

  const alertRef = useRef(null);

  useEffect(() => {
    if (errors?.rulesAmountsCategory?.value?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.rulesAmountsCategory?.value?.type]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={4}>
          <FromOperatorSelect
            disabled={!section}
            tpart='offerOrder:operator'
            options={options}
            name={`${name}.operator`}
            label={t('sections.category.operator')}
          />
        </Grid>
      </Grid>

      <Form control={control} size={'small'} id={'amount-category-item-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid item xs={12} lg={4}>
            <FromAsyncSelectCategory
              label={t('common:category')}
              placeholder={t('sections.category.select')}
              disabled={!section}
              name={'category'}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <FromOperatorSelect
              disabled={!section}
              tpart='offerOrder:operator'
              options={[
                OPERATOR_RULE_OFFER_TYPE.EQUAL,
                OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
                OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
              ]}
              name={'operator'}
              label={t('sections.category.operator')}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormTextField disabled={!section} type='number' label={t('offerOrder:quantityItem')} name={'amount'} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <Button
              form='amount-category-item-form'
              onClick={onSubmit}
              startIcon={<AddOutlinedIcon fontSize='inherit' />}
              variant='contained'
              disabled={!section}
              sx={{
                marginLeft: 'auto',
              }}
            >
              {t('sections.category.action')}
            </Button>
          </Grid>
        </Grid>
      </Form>
      <Divider />

      {errors?.rulesAmountsCategory?.value?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesAmountsCategory?.value?.message)}
        </Alert>
      ) : (
        <OfferCategoryFromList fields={fields} removeRule={removeRule} section={section} />
      )}
    </Stack>
  );
};

export default memo(OfferCategoryFromRule);
