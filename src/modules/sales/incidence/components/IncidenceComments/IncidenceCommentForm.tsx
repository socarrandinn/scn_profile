import { memo, useCallback, useMemo } from 'react';
import { ChildrenProps, Form, FormTextField, HandlerError, IconButton } from '@dfl/mui-react-common';
import { CircularProgress, Divider, Grid, InputAdornment, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import { ACCEPT_ALL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import useIncidenceCommentCreateForm from '../../hooks/useIncidenceCommentsCreateForm';
import { ArrowRightIcon } from 'components/icons/ArrowRightIcon';
import { AttachFileForm } from 'components/FileDropZone';
import { useFieldArray } from 'react-hook-form';
import { FilePreview } from 'components/FileDropZone/FilePreview';
import DeleteIcon from 'components/icons/DeleteIcon';

type IncidenceCommentFormProps = ChildrenProps & {
  incidenceId: string;
};

const IncidenceCommentForm = ({ incidenceId, children }: IncidenceCommentFormProps) => {
  const { t } = useTranslation('incidence');
  const theme = useTheme();
  const { control, onSubmit, isLoading, error, watch, setValue } = useIncidenceCommentCreateForm(incidenceId);
  const message = watch?.('comment');
  const { fields, append, remove } = useFieldArray({ control, name: 'attachments' });
  const files = watch?.('attachments');

  const isDisabled = useMemo(() => {
    return Boolean(message === '' && files?.length === 0);
  }, [message, files?.length]);

  const handleDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'incidence-comment-form'} setValue={setValue}>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField
              name='comment'
              placeholder={t('addComments')}
              minRows={1}
              variant='outlined'
              fullWidth
              sx={{ '.MuiOutlinedInput-root': { paddingX: '4px !important' } }}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AttachFileForm
                      required
                      fields={fields}
                      append={append}
                      name='attachments'
                      type={TYPE_DROP.FILE}
                      onlyButton
                      control={control}
                      showDropzoneWrapper
                      inputProps={{
                        accept: ACCEPT_ALL,
                        maxFiles: 4,
                        maxSize: MAX_SIZE_FILE,
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Divider orientation="vertical" flexItem sx={{ width: 5 }} />
                    <IconButton
                      disabled={isDisabled || isLoading}
                      type='submit'
                      form='incidence-comment-form'
                      tooltip={t('common:send')}
                      sx={{
                        cursor: 'pointer !important',
                        background: theme.palette.primary.main,
                        '&:hover': { background: theme.palette.primary.dark },
                        '&.Mui-disabled': {
                          backgroundColor: '#E0E0E0',
                        },
                      }}>
                      {isLoading ? <CircularProgress size={20} /> : <ArrowRightIcon fontSize={'small'} sx={{ p: 0.3 }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {files &&
            <Grid item xs={12} display={'flex'} gap={2}>
              {files?.map((file, index) => (
                <FilePreview
                  data={file}
                  key={index}
                  actions={
                    <IconButton
                      tooltip={t('dropZone:deleteFile')}
                      color='error'
                      size='small'
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      <DeleteIcon fontSize='small' />
                    </IconButton>
                  }
                />
              ))}
            </Grid>
          }
          {children}
        </Grid>
      </Form>
    </>
  );
};

export default memo(IncidenceCommentForm);
