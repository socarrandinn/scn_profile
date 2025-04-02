import { memo, useMemo } from 'react';
import { ChildrenProps, Form, FormTextField, HandlerError, IconButton } from '@dfl/mui-react-common';
import { Grid, InputAdornment, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FileDropZone, { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import { ACCEPT_ALL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import useIncidenceCommentCreateForm from '../../hooks/useIncidenceCommentsCreateForm';
import { ArrowRightIcon } from 'components/icons/ArrowRightIcon';

type IncidenceCommentFormProps = ChildrenProps & {
  incidenceId: string;
};

const IncidenceCommentForm = ({ incidenceId, children }: IncidenceCommentFormProps) => {
  const { t } = useTranslation('incidence');
  const theme = useTheme();
  const { control, onSubmit, isLoading, error, watch, setValue } = useIncidenceCommentCreateForm(incidenceId);
  const message = watch?.('comment');
  const file = watch?.('attachments');

  const isDisabled = useMemo(() => {
    return Boolean(message === '' && file?.length === 0);
  }, [JSON.stringify(message), JSON.stringify(file)]);

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'incidence-comment-form'} setValue={setValue}>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField
              name='comment'
              label={t('addComments')}
              minRows={1}
              variant='outlined'
              fullWidth
              multiline
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#EDEEF0',
                },
                '.MuiOutlinedInput-root': {
                  background: '#EDEEF0',
                },
                '.MuiInputAdornment-positionEnd': {
                  alignSelf: 'end',
                  transform: 'translate(9px, -9px)',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      disabled={isDisabled}
                      type='submit'
                      form='incidence-comment-form'
                      tooltip={t('common:send')}
                      sx={{
                        background: theme.palette.primary.main, '&:hover': { background: theme.palette.primary.dark }, '&.Mui-disabled': {
                          backgroundColor: '#E0E0E0',
                        },
                      }}>
                      <ArrowRightIcon fontSize={'small'} sx={{ p: 0.3 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {children}
          <Grid item xs={12}>
            <FileDropZone
              sxTitle={{ flexDirection: 'row', alignItems: 'center' }}
              required
              name='attachments'
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
        </Grid>
      </Form>
    </>
  );
};

export default memo(IncidenceCommentForm);
