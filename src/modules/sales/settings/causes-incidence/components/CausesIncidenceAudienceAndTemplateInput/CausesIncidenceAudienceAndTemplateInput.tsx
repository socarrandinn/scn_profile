import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteAudienceButton from './DeleteAudienceButton';
import { ICausesIncidence } from '../../interfaces';
import CausesIncidenceAudienceTargetSelect from '../CausesIncidenceAudienceTargetSelect/CausesIncidenceAudienceTargetSelect';
import { FormTextField } from '@dfl/mui-react-common';
import AddNewAudienceButton from './AddNewAudienceButton';
import { Control, useFieldArray, useWatch } from 'react-hook-form';
import { getAudienceTarget } from '../../constants/causes-incidence.utils';

interface ICausesIncidenceAudienceAndTemplateInput {
  control: Control<ICausesIncidence, any>;
}

const CausesIncidenceAudienceAndTemplateInput = ({ control }: ICausesIncidenceAudienceAndTemplateInput) => {
  const { t } = useTranslation('causesIncidence');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notification.audience',
  });

  const selectedTarget = useWatch({
    control,
    name: 'notification.audience',
  });

  const selectedAll = getAudienceTarget(selectedTarget)?.length === 4;

  return (
    <Stack sx={{ mt: 2 }}>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Typography variant='h2'>{t('sendNotification.title')}</Typography>
        <Typography fontWeight={300}>{t('sendNotification.subtitle')}</Typography>
      </Box>
      <Grid item xs={12}>
        <Stack gap={{ xs: 1, md: 3 }}>
          {fields?.map((field, index) => {
            return (
              <Stack key={field.id} gap={{ xs: 1 }}>
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Typography
                    variant='h2'
                    fontWeight={'semibold'}
                    className='MuiTypography-root MuiTypography-subtitle2 css-ati914-MuiTypography-root'
                  >
                    {t('fields.notification.target')} {index + 1}
                  </Typography>

                  <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                    <AddNewAudienceButton
                      append={append}
                      disabled={selectedAll}
                      hidden={!(index === fields?.length - 1)}
                    />
                    <DeleteAudienceButton
                      handleClick={() => {
                        remove(index);
                      }}
                      disabled={fields?.length === 1}
                    />
                  </Stack>
                </Stack>

                <CausesIncidenceAudienceTargetSelect
                  name={`notification.audience.${index}.target`}
                  control={control}
                  key={field.id}
                  fields={selectedTarget}
                  index={index}
                  required
                />

                <FormTextField
                  placeholder={t('fields.notification.template')}
                  name={`notification.audience.${index}.template`}
                  required
                />
              </Stack>
            );
          })}
        </Stack>
      </Grid>
    </Stack>
  );
};

export default CausesIncidenceAudienceAndTemplateInput;
