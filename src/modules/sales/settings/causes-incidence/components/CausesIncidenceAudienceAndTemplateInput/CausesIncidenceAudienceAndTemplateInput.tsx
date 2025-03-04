import { Box, Grid, Typography } from '@mui/material';
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
    <>
      <Grid item xs={12}>
        {fields?.map((field, index) => {
          return (
            <Box key={field.id}>
              <Typography
                variant='h6'
                className='MuiTypography-root MuiTypography-subtitle2 css-ati914-MuiTypography-root'
              >
                {t('fields.notification.target')} {index + 1}
              </Typography>
              <Grid container spacing={{ xs: 1, md: 2 }}>
                <Grid item xs={12}>
                  <CausesIncidenceAudienceTargetSelect
                    name={`notification.audience.${index}.target`}
                    selectedValues={getSelectedTargets()}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    placeholder={t('fields.notification.template')}
                    name={`notification.audience.${index}.template`}
                  />
                </Grid>
                {fields.length > 1 && (
                  <Grid item xs={12}>
                    <DeleteAudienceButton
                      handleClick={() => {
                        remove(index);
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
          );
        })}
      </Grid>
      <AddNewAudienceButton append={append} control={control} />
    </>
  );
};

export default CausesIncidenceAudienceAndTemplateInput;
