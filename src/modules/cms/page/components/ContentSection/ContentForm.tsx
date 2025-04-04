import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Box, Stack, Button } from '@mui/material';
import { FormTinyMceEditorField } from 'components/TinyMceEditor';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';

type Props = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  onClose: () => void;
  formState?: any;
};

const ContentForm = ({ error, control, isLoading, onSubmit, onClose, formState }: Props) => {
  const { t } = useTranslation('page');

  return (
    <Box>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <FormTinyMceEditorField minHeight={300} required name='content' />
      </Form>
      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={onClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={!formState?.isDirty}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};
export default memo(ContentForm);
