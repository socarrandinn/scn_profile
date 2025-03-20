import { useToggle } from '@dfl/hook-utils';
import { Form } from '@dfl/mui-react-common';
import { Box, Checkbox, FormControlLabel, Tooltip } from '@mui/material';
import { ConfirmAction } from 'components/ConfirmAction';
import useDeliveryUpdateEnabled from 'modules/sales/settings/common/hooks/useDeliveryUpdateEnabled';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IDelivery;
};

const EnabledCell = ({ data }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { onOpen, isOpen, onClose } = useToggle();

  const { control } = useForm({
    defaultValues: { enabled: data?.enabled },
  });

  const { mutate, isLoading } = useDeliveryUpdateEnabled(data?._id as string, data?.space as string);

  const handleSubmit = useCallback(() => {
    mutate(!data?.enabled);
  }, [mutate, data?.enabled]);

  return (
    <Box
      sx={{
        '.MuiFormControlLabel-root': { marginRight: '0px !important', marginLeft: '1px !important' },
        '.MuiButtonBase-root': { padding: 0.5 },
      }}
    >
      <Form id='global-config-form' control={control}>
        <Tooltip title={data?.enabled ? t('fields.disabled') : t('fields.enabled')}>
          <FormControlLabel
            control={<Checkbox onChange={onOpen} checked={data?.enabled} name={'enabled'} disabled={isLoading} />}
            label={undefined}
          />
        </Tooltip>
      </Form>
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={handleSubmit} isLoading={isLoading} />
    </Box>
  );
};

export default memo(EnabledCell);
