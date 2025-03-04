import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteAudienceButton from './DeleteAudienceButton';
import { ICausesIncidence } from '../../interfaces';
import CausesIncidenceAudienceTargetSelect from '../CausesIncidenceAudienceTargetSelect/CausesIncidenceAudienceTargetSelect';
import { FormTextField } from '@dfl/mui-react-common';
import AddNewAudienceButton from './AddNewAudienceButton';
import { Control, useFieldArray } from 'react-hook-form';

interface ICausesIncidenceAudienceAndTemplateInput {
  control: Control<ICausesIncidence, any>;
}

const CausesIncidenceAudienceAndTemplateInput = ({ control }: ICausesIncidenceAudienceAndTemplateInput) => {
  const { t } = useTranslation('causesIncidence');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notification.audience',
  });

  const getSelectedTargets = () => {
    const cleanedValues: string[] = [];
    fields?.forEach((field) => {
      field.target?.forEach((target: any) => cleanedValues.push(target));
    });
    return cleanedValues;
  };

  return (
    <Paper sx={{ padding: 2, width: '100%', mt: 1 }}>
      <Grid item xs={12}>
        <Stack gap={{ xs: 1, md: 2 }} divider={<Divider flexItem />}>
          {fields?.map((field, index) => {
            return (
              <Stack key={field.id} gap={{ xs: 1, md: 2 }}>
                <Typography
                  variant='h6'
                  className='MuiTypography-root MuiTypography-subtitle2 css-ati914-MuiTypography-root'
                >
                  {t('fields.notification.target')} {index + 1}
                </Typography>

                <CausesIncidenceAudienceTargetSelect
                  name={`notification.audience.${index}.target`}
                  selectedValues={getSelectedTargets()}
                />

                <FormTextField
                  placeholder={t('fields.notification.template')}
                  name={`notification.audience.${index}.template`}
                  required
                />

                {fields.length > 1 && (
                  <DeleteAudienceButton
                    handleClick={() => {
                      remove(index);
                    }}
                  />
                )}
              </Stack>
            );
          })}
        </Stack>
        <Box
          sx={{
            mt: { xs: 1, md: 2 },
          }}
        >
          <AddNewAudienceButton append={append} control={control} />
        </Box>
      </Grid>
    </Paper>
  );
};

export default CausesIncidenceAudienceAndTemplateInput;
