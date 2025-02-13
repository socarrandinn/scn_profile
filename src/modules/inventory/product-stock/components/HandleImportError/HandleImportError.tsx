import { Close } from '@mui/icons-material';
import { Alert, Button, Collapse, IconButton, Stack } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
type Props = {
  error: any;
  onClick?: () => void;
};

const HandleImportError = ({ error, onClick }: Props) => {
  const { t } = useTranslation();
  const errorMessage = error?.reference ? 'stock:errors.IMPORT_STOCK_FILE_ERROR' : error?.message;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  if (!error) return null;
  return (
    <Collapse in={open}>
      <Alert
        severity='error'
        action={
          <Stack gap={1} flexDirection={'row'}>
            {onClick && (
              <Button variant='outlined' size='small' onClick={onClick}>
                {t('showDetail')}
              </Button>
            )}
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize='inherit' />
            </IconButton>
          </Stack>
        }
      >
        {t(errorMessage)}
      </Alert>
    </Collapse>
  );
};

export default memo(HandleImportError);
