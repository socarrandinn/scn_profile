import { useToggle } from '@dfl/hook-utils';
import { DialogForm, FlexBox } from '@dfl/mui-react-common';
import { Button, DialogContent, Switch, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useUpdateStateManufacture from '../../hooks/useUpdateStateManufacture';

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
      <Button variant='outlined' onClick={onOpen}>
        {t('bulkActions.state')}
      </Button>
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
