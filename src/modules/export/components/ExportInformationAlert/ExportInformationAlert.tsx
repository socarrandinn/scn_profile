import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ConditionContainer, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { useLocalStorage } from '@dfl/hook-utils';
import ExportingState from 'components/ExportInformationAlert/ExportingState';
import { isEmpty } from 'lodash';
import { useActorSecurity } from 'hooks/useActorSecurity';

type ExportInformationAlertProps = {
  title?: string;
  confirmation?: string;
  isOpen: boolean;
  onClose: () => void;
  onExport: any;
  reset: () => void;
  isExporting: boolean;
  disabled?: boolean;
  error: any;
  total: number | undefined;
  selected?: readonly string[] | undefined;
};

const ExportInformationAlert = ({
  isOpen,
  onClose,
  total,
  title = 'common:exportDialog.title',
  confirmation = 'common:exportDialog.confirmation',
  onExport,
  error,
  reset,
  disabled,
  isExporting,
  selected,
}: ExportInformationAlertProps) => {
  const { t } = useTranslation('common');
  const { isLogisticProvider } = useActorSecurity();
  const {
    data: exportHide,
    storeData,
  } = useLocalStorage('__export_confirmation_hide__', false);
  const [notShowMore, setShowMore] = useState(exportHide);

  const handleChange = (e: any) => {
    setShowMore(e.target.checked);
  };

  useEffect(() => {
    if (!isOpen) reset?.();
  }, [isOpen, reset]);

  const handleExport = () => {
    onExport?.({
      isVariant: false,
      isManufacturer: !isLogisticProvider,
    });
    storeData(notShowMore);
  };

  useEffect(() => {
    if (exportHide && isOpen && !disabled) {
      onExport?.({
        isVariant: false,
        isManufacturer: !isLogisticProvider,
      });
    }
  }, [exportHide, isOpen, onExport, disabled, isLogisticProvider]);

  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <ConditionContainer
        active={!(isExporting || (exportHide && !disabled))}
        alternative={<ExportingState error={error} />}
      >
        <DialogContent sx={{ padding: '20px 40px' }}>
          <HandlerError error={error} />
          <FlexBox flexDirection={'column'}>
            <Typography variant={'h2'} mb={3} fontSize={24}>
              {t(title)}
            </Typography>
            <Typography mb={1}>
              {t(confirmation, {
                total: isEmpty(selected) ? total : selected?.length,
              })}
            </Typography>

            <FormControlLabel
              control={<Checkbox onChange={handleChange} disabled={disabled} />}
              label={t('notShowMessage')}
            />
          </FlexBox>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={onClose} disabled={isExporting}>
            {t('cancel')}
          </Button>
          <LoadingButton loading={isExporting} disabled={disabled} variant={'contained'} onClick={handleExport}>
            {t(title)}
          </LoadingButton>
        </DialogActions>
      </ConditionContainer>
    </Dialog>
  );
};

export default memo(ExportInformationAlert);
