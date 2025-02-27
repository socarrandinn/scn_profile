import { memo, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

const OfferDescriptionForm = ({ isCoupon }: { isCoupon?: boolean }) => {
  const { t } = useTranslation('offerOrder');

  const trans = useMemo(() => {
    if (isCoupon) {
      return {
        description: 'couponOrder:sections:description:helperText',
        promotionText: 'couponOrder:sections:promotionText:helperText',
        note: 'couponOrder:sections:note:helperText',
      };
    }
    return {
      description: 'offerOrder:sections:description:helperText',
      promotionText: 'offerOrder:sections:promotionText:helperText',
      note: 'offerOrder:sections:note:helperText',
    };
  }, [isCoupon]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} rowSpacing={{ xs: 2, md: 3 }}>
      {isCoupon && (
        <Grid item xs={12}>
          <FormTextField
            required
            helperText={t('couponOrder:sections:code:helperText')}
            label={t('couponOrder:sections:code:label')}
            placeholder={t('couponOrder:sections:code:placeholder')}
            name='code'
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          required
          multiline
          helperText={t(trans.description)}
          label={t('offerOrder:sections:description:label')}
          placeholder={t('offerOrder:sections:description:placeholder')}
          name='description'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          required
          minRows={3}
          multiline
          helperText={t(trans.promotionText)}
          label={t('offerOrder:sections:promotionText:label')}
          placeholder={t('offerOrder:sections:promotionText:placeholder')}
          name='promotionText'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t(trans.note)}
          label={t('offerOrder:sections:note:label')}
          placeholder={t('offerOrder:sections:note:placeholder')}
          name='note'
        />
      </Grid>
    </Grid>
  );
};

export default memo(OfferDescriptionForm);
