import { Button, Grid, Stack, Divider, Alert } from '@mui/material';
import { memo, useEffect, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OfferProductFromList from './OfferProductFromList';
import { useFieldArray } from 'react-hook-form';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import useRuleProductItemForm from 'modules/sales-offer/common/hooks/useRuleProductItemForm';

type OfferProductFromRuleProps = {
  section: boolean;
  control: any;
  name: string;
  errors: {
    rulesProducts: {
      value: {
        message: string;
        type: string;
      };
    };
  };
};

const OfferProductFromRule = ({ section, control: minControl, errors, name }: OfferProductFromRuleProps) => {
  const { t } = useTranslation('offerOrder');

  const {
    fields,
    append: appendRule,
    remove: removeRule,
  } = useFieldArray({ control: minControl, name: `${name}.value` });

  const alertRef = useRef(null);

  useEffect(() => {
    if (errors?.rulesProducts?.value?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.rulesProducts?.value?.type]);

  const { control, onSubmit } = useRuleProductItemForm(appendRule);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <FromOperatorSelect
              sx={{
                maxWidth: {
                  xs: '100%',
                  md: 300,
                },
              }}
              disabled={!section}
              tpart='offerOrder:operator'
              options={[OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE]}
              name={`${name}.operator`}
              label={t('sections.product.operator')}
            />
          </Stack>
        </Grid>
      </Grid>
      <Form control={control} size={'small'} id={'product-item-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} lg={4}>
            <FromAsyncSelectProductOffer
              label={t('common:product')}
              control={control}
              placeholder={t('sections.product.select')}
              disabled={!section}
              name={'product'}
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
              label={t('sections.product.operator')}
            />
          </Grid>

          <Grid item xs={12} lg={2}>
            <FormTextField disabled={!section} type='number' label={t('offerOrder:quantity')} name={'quantity'} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Button
              form='product-item-form'
              onClick={onSubmit}
              startIcon={<AddOutlinedIcon fontSize='inherit' />}
              variant='contained'
              disabled={!section}
              sx={{
                marginLeft: 'auto',
              }}
            >
              {t('sections.product.action')}
            </Button>
          </Grid>
        </Grid>
      </Form>
      <Divider />

      {errors?.rulesProducts?.value?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesProducts?.value?.message)}
        </Alert>
      ) : (
        <OfferProductFromList fields={fields} removeRule={removeRule} section={section} />
      )}
    </Stack>
  );
};

export default memo(OfferProductFromRule);
