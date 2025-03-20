import { Grid } from '@mui/material';
import { FileDropZone } from 'components/FileDropZone';
import { ACCEPT_ALL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import { FormSelectProviderType } from 'modules/inventory/provider/common/components/FormSelectProviderType';
import { ProvidersByTypeSelect } from 'modules/inventory/provider/common/components/ProvidersByTypeSelect';
import { StockReductionCauseSelect } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseSelect';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { memo } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  control: any;
  setValue: any;
};

const StockReductionCauseForm = ({ control, setValue }: Props) => {
  const { t } = useTranslation('product');

  const selectedCause: IStockReductionCause = useWatch({ control, name: 'cause' });
  const selectedProviderType: string = useWatch({ control, name: 'providerType' });

  return (
    <>
      <Grid item xs={12}>
        <StockReductionCauseSelect required name='cause' label={t('cause.title')} />
      </Grid>
      {selectedCause?.requiresResponsible && (
        <Grid item container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={4}>
            <FormSelectProviderType required name={'providerType'} size='small' label={t('common:provider.type')} />
          </Grid>
          <Grid item xs={12} md={8}>
            <ProvidersByTypeSelect
              setValue={setValue}
              required
              control={control}
              key={selectedProviderType}
              disabled={!selectedProviderType}
              readOnly={!selectedProviderType}
              name={'responsible'}
              type={selectedProviderType}
              size='small'
              label={t('common:provider.title')}
              placeholder={t('provider:selectProvider')}
            />
          </Grid>
        </Grid>
      )}
      {selectedCause?.requiresEvidence && (
        <Grid item xs={12}>
          <FileDropZone
            required
            name='evidence'
            label={t('common:evidence')}
            dropTitle={t('stock:warehouse.import.fields.uploadFile')}
            type={TYPE_DROP.FILE}
            control={control}
            showDropzoneWrapper
            inputProps={{
              accept: ACCEPT_ALL,
              maxFiles: 4,
              maxSize: MAX_SIZE_FILE,
            }}
          />
        </Grid>
      )}
    </>
  );
};

export default memo(StockReductionCauseForm);
