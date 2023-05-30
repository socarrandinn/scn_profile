import { memo, useCallback } from 'react';
import { Box, Button, DialogActions, DialogContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTeamDetail } from 'modules/rrhh/team/contexts/TeamDetailsContext';
import { SelectEmployee } from 'modules/rrhh/employee/common/components/SelectEmployee';
import useAddMemberTeamForm from 'modules/rrhh/team/hooks/useAddMemberTeamForm';

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddMemberModal = ({ open, onClose }: Props) => {
  const { t } = useTranslation('team');

  const { data: team } = useTeamDetail();
  const { isLoading, reset, onSubmit, control, error } = useAddMemberTeamForm(team, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth={'xs'}
      onClose={handleClose}
      title={t('addMember')}
      aria-labelledby={'add-member-team-title'}
    >
      <DialogContent>
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'form-add-users-to-role'}>
          <Box mt={1}>
            <SelectEmployee name={'employees'} placeholder={t('employeeList')} />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-team-member'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddMemberModal);
