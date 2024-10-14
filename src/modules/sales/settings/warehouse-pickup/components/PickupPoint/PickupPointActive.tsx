import { memo, useCallback, useMemo } from 'react';
import { useStorePickupContext } from '../../contexts/StorePickupContext';
import { useTranslation } from 'react-i18next';
import useUpdatePickupPoint from '../../hooks/useUpdatePickupPoint';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ConfirmAction } from 'components/ConfirmAction';

const PickupPointActive = ({ description }: { description: string }) => {
  const { data, isLoading } = useStorePickupContext();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { mutate } = useUpdatePickupPoint();
  const { t } = useTranslation('warehousePickup');

  const enabled = useMemo(() => data?.data?.enabled, [data?.data?.enabled]);

  const handleUpdating = useCallback(() => {
    mutate(!enabled);
    onClose();
  }, [mutate, enabled, onClose]);

  return (
    <Stack>
      <FormControlLabel
        value='start'
        control={<Checkbox checked={enabled} onClick={onOpen} />}
        label={t('pickupPoint.enabled')}
      />
      <Typography color={'gray'}>{description}</Typography>

      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={handleUpdating} isLoading={isLoading} />
    </Stack>
  );
};

export default memo(PickupPointActive);
