import { useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { SelectProviderType } from 'modules/inventory/provider/common/components/FormSections/SelectProviderType';
import { SelectProviderByType } from 'modules/inventory/provider/common/components/ProviderSelectByType';
import { useTranslation } from 'react-i18next';

const SelectProviderAndType = () => {
  const { t } = useTranslation('common');
  const { watch } = useDFLForm();
  const providerType = watch?.('type');

  return (
    <>
      <Grid item xs={12}>
        <SelectProviderType
          name='type'
          required
          label={t('provider.type')}
          placeholder={t('provider.type')}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectProviderByType
          required
          disabled={!providerType}
          name='space'
          label={t('provider.title')}
          helperText={!providerType ? t('provider.providerTypeFirst') : ''}
          type={providerType}
        />
      </Grid>
    </>
  )
};

export default SelectProviderAndType;
