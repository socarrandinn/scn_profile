import { Control, useFieldArray } from 'react-hook-form'
import { Box, Grid, Typography } from '@mui/material'
import AudienceTargetSelect from '../AudienceTargetSelect/AudienceTargetSelect'
import { IOrderStatus } from '../../interfaces';
import { useTranslation } from 'react-i18next';
import AddNewAudienceButton from './AddNewAudienceButton';
import AudienceTemplateInput from '../AudienceTemplateInput/AudienceTemplateInput';
import DeleteAudienceButton from './DeleteAudienceButton';

interface IAudienceAndTemplateInput {
  control: Control<IOrderStatus, any>;
}

const AudienceAndTemplateInput = ({ control }: IAudienceAndTemplateInput) => {
  const { t } = useTranslation('orderStatus')

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notification.audience'
  })

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
                {t('fields.notification.audienceTarget')} {index + 1}
              </Typography>
              <Grid container spacing={2} sx={{ marginBottom: '.5rem' }}>
                <Grid item sm={6} xs={12}>
                  <AudienceTargetSelect
                    control={control}
                    name={`notification.audience.${index}.target`}
                    selectedValues={fields?.map((field) => {
                      return field.target;
                    })}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <AudienceTemplateInput control={control} name={`notification.audience.${index}.template`} />
                </Grid>
              </Grid>
              {
                fields.length > 1 &&
                <DeleteAudienceButton
                  handleClick={() => {
                    remove(index);
                  }}
                />
              }
            </Box>
          );
        })}
      </Grid>
      <AddNewAudienceButton append={append} control={control}/>
    </>
  );
}

export default AudienceAndTemplateInput
