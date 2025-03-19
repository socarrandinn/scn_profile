import { Alert, Box, Button, Divider, Grid, Stack } from '@mui/material';
import { memo, useEffect, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray } from 'react-hook-form';
import { TWO_FOR_ONE_OPERATOR } from '../../interfaces/offer.type.enum';

import OfferTwoForOneFromList from './OfferTwoForOneFromList';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import useTwoForOneForm from 'modules/sales-offer/common/hooks/useTwoForOneForm';
import { grey } from '@mui/material/colors';

type Props = {
  control: any;
  name: string;
  errors: {
    twoForOneOffers: {
      message: string;
      type: string;
    };
  };
};

const OfferTwoForOneFromRule = ({ control: mainControl, errors, name }: Props) => {
  const { t } = useTranslation('offerOrder');

  const {
    fields,
    remove: removeRule,
    append: appendRule,
  } = useFieldArray({
    control: mainControl,
    name,
  });
  const { control, onSubmit } = useTwoForOneForm(appendRule);

  const alertRef = useRef(null);

  useEffect(() => {
    if (errors?.twoForOneOffers?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.twoForOneOffers?.type]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Form control={control} size={'small'} id={'tow-for-one-form'}>
        <Stack
          sx={{
            gap: 2,
            padding: '24px 16px',
            borderRadius: 2,
            border: `1px solid ${grey[300]}`,
          }}
        >
          <Box width={'100%'}>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={2}>
                <FromOperatorSelect
                  tpart='offerOrder:twoForOneOperator'
                  options={[TWO_FOR_ONE_OPERATOR.EVERY, TWO_FOR_ONE_OPERATOR.MORE_THAN]}
                  name={'type'}
                  label={t('sections.category.operator')}
                  defaultValue={TWO_FOR_ONE_OPERATOR.EVERY}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormTextField type='number' label={t('sections.twoForOne.count')} name={'buyValue'} />
              </Grid>
              <Grid item xs={12} md={6}>
                <FromAsyncSelectProductOffer
                  label={t('common:product')}
                  control={control}
                  placeholder={t('sections.product.select')}
                  name={'buyProduct'}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider
            flexItem
            orientation='horizontal'
            sx={{
              width: '100%',
              m: 'auto',
              fontWeight: 600,
              ':before, :after': {
                borderTopStyle: 'dashed',
              },
            }}
          >
            {t('sections.twoForOne.recibe')}
          </Divider>

          <Box width={'100%'}>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={4}>
                <FormTextField type='number' label={t('sections.twoForOne.count')} name={'getValue'} />
              </Grid>
              <Grid item xs={12} md={8}>
                <FromAsyncSelectProductOffer
                  label={t('common:product')}
                  control={control}
                  placeholder={t('sections.product.select')}
                  name={'getProduct'}
                />
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  form='tow-for-one-form'
                  onClick={onSubmit}
                  startIcon={<AddOutlinedIcon fontSize='inherit' />}
                  variant='contained'
                >
                  {t('sections.category.action')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Form>
      <Divider />

      {errors?.twoForOneOffers?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.twoForOneOffers?.message)}
        </Alert>
      ) : (
        <OfferTwoForOneFromList fields={fields as any[]} removeRule={removeRule} />
      )}
    </Stack>
  );
};

export default memo(OfferTwoForOneFromRule);
