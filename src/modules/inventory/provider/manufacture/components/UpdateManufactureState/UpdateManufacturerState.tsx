import { useToggle } from '@dfl/hook-utils';
import { DialogForm, FlexBox } from '@dfl/mui-react-common';
import { Badge, Button, DialogContent, Switch, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUpdateStateManufacture from '../../hooks/useUpdateStateManufacture';
import { PermissionCheck } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from '../../constants';

interface IUpdateManufacturerState {
  currentState: boolean;
  id: string;
}

const UpdateManufacturerState = ({ currentState, id }: IUpdateManufacturerState) => {
  const { t } = useTranslation('manufacture');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading, updateState } = useUpdateStateManufacture(id);

  return (
    <>
      <PermissionCheck permissions={MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE}>
        <Badge color={currentState ? 'success' : 'error'} variant='dot'>
          <Button variant='outlined' onClick={onOpen}>
            {t('bulkActions.state')}
          </Button>
        </Badge>
      </PermissionCheck>
      <DialogForm open={isOpen} onClose={onClose} title={t('changeStateTitle')} fullWidth={false}>
        <DialogContent>
          <Typography fontSize={'small'} color={'text.secondary'}>
            {t('stateDescription')}
          </Typography>
          <FlexBox alignItems='center' justifyContent='space-between'>
            <Typography>{`${t('currentState')}: ${
              currentState ? t('fields.active') : t('fields.inactive')
            }`}</Typography>
            <Switch
              edge='end'
              defaultChecked={currentState}
              onChange={(e) => {
                updateState(e.target.checked);
              }}
              disabled={isLoading}
            />
          </FlexBox>
        </DialogContent>
      </DialogForm>
    </>
  );
};

export default UpdateManufacturerState;
