import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTinyMceEditorField } from 'components/TinyMceEditor';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';

const GeneralInfoForm = ({ showCategory }: { showCategory?: boolean }) => {
  const { t } = useTranslation('product');

  const mQuery = !showCategory ? { md: 6 } : { md: 6, xl: 4 };

  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={12} md={12}>
        <FormTextField size='medium' fullWidth autoFocus required name='name' label={t('fields.name')} />
      </Grid>
      <Grid item xs={12} {...mQuery}>
        <FormTextField size='medium' fullWidth required name='brand' label={t('fields.brand')} />
      </Grid>
      <Grid item xs={12} {...mQuery}>
        <FormTextField size='medium' fullWidth required name='code' label={t('fields.code')} />
      </Grid>
      {showCategory && (
        <Grid item xs={12} md={12} xl={4}>
          <CategorySelect required name={'category'} label={t('fields.category')} />
        </Grid>
      )}
      <Grid item xs={12} md={12}>
        <FormTextField size='medium' fullWidth name='referenceCode' label={t('fields.referenceCode')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth size='medium' name='barcode' label={t('fields.barcode')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTinyMceEditorField required name='description' label={t('fields.description')} />
      </Grid>
      {/* {showKeyword && (
        <Grid item xs={12} md={12}>
          <FormProductKeyworsField size='medium' name='keywords' label='section.summary.organization.labelTags' />
        </Grid>
      )} */}
    </Grid>
  );
};

export default GeneralInfoForm;
