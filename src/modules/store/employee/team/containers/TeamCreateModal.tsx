import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useTeamCreateForm from 'modules/store/employee/team/hooks/useTeamCreateForm';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { TeamForm, TeamFormSkeleton } from 'modules/store/employee/team/components/TeamForm';
import { mapGetOneErrors } from 'constants/errors';
import { TEAM_ERRORS } from 'modules/store/employee/team/constants/team.errors';

type TeamCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ITeam;
  onClose: () => void;
};
const TeamCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: TeamCreateModalProps) => {
  const { t } = useTranslation('team');
  const { control, onSubmit, isLoading, reset, error } = useTeamCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
        <DialogForm
            open={open}
            onClose={handleClose}
            isLoading={loadingInitData}
            title={t(title)}
            aria-labelledby={'team-creation-title'}
        >
            <DialogContent>
                {dataError && <HandlerError error={dataError} errors={TEAM_ERRORS} mapError={mapGetOneErrors}/>}

                {!dataError && (
                    <ConditionContainer active={!loadingInitData} alternative={<TeamFormSkeleton/>}>
                        <TeamForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit}/>
                    </ConditionContainer>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('common:cancel')}</Button>
                <LoadingButton
                    variant='contained'
                    type={'submit'}
                    loading={isLoading || loadingInitData}
                    disabled={!!dataError}
                    form='form'
                >
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
  );
};

export default memo(TeamCreateModal);
