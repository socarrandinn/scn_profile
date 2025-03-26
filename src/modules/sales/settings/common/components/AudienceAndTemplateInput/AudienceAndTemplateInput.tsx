import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteAudienceButton from './DeleteAudienceButton';
import { FormTextField } from '@dfl/mui-react-common';
import AddNewAudienceButton from './AddNewAudienceButton';
import { useFieldArray, useWatch } from 'react-hook-form';
import { getAudienceTarget } from '../../constants/common.utils';
import AudienceTargetSelect from './AudienceTargetSelect';

interface IAudienceAndTemplateInput {
  control: any;
  name: string;
  options: string[];
}

const AudienceAndTemplateInput = ({ control, name = 'notification.audience', options }: IAudienceAndTemplateInput) => {
  const { t } = useTranslation('causesIncidence');
  const { fields, append, remove } = useFieldArray({ control, name });
  const selectedTarget = useWatch({ control, name });

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

                <AudienceTargetSelect
                  name={`notification.audience.${index}.target`}
                  control={control}
                  key={field.id}
                  fields={selectedTarget}
                  index={index}
                  required
                  options={options}
                />

                <FormTextField
                  placeholder={`${t('fields.notification.template')}*`}
                  name={`notification.audience.${index}.template`}
                  required
                  autoFocus
                  type='text'
                  control={control}
                />
              </Stack>
            );
          })}
        </Stack>
      </Grid>
    </Stack>
  );
};

export default AudienceAndTemplateInput;
