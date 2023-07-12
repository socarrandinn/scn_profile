import React, { memo, useCallback, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import TimeOffPolicyListContainer from 'modules/store/employee/settings/time-off-policies/containers/TimeOffPolicyListContainer';
import TimeOffPolicyTypeListContainer from 'modules/store/employee/settings/time-off-policies/containers/TimeOffPolicyTypeListContainer';
import TimeOffPolicyTypeCreateModal from 'modules/store/employee/settings/time-off-policies/containers/TimeOffPolicyTypeCreateModal';
import TimeOffPolicyCreateModal from 'modules/store/employee/settings/time-off-policies/containers/TimeOffPolicyCreateModal';

const TimeOffPoliciesContainer = ({ isAccount }: { isAccount?: boolean }) => {
  const { t } = useTranslation('timeOffPolicy');

  const [createMode, setCreateMode] = useState({
    timeOffPolicy: false,
    timeOffType: false,
  });

  const onChangeCreateMode = useCallback((section: string, value: boolean) => {
    setCreateMode((prev) => ({ ...prev, [section]: value }));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <FormPaper
            firsts
            title={t('section.policies.title')}
            actions={
              <PermissionCheck permissions={'USER_ADMIN'}>
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeCreateMode('timeOffPolicy', true);
                  }}
                >
                  {t('newTimeOffPolicy')}
                </Button>
              </PermissionCheck>
            }
          >
            <TimeOffPolicyListContainer />
            <TimeOffPolicyCreateModal
              title={t('createTimeOffPolicy')}
              open={createMode?.timeOffPolicy}
              onClose={() => {
                onChangeCreateMode('timeOffPolicy', false);
              }}
            />
          </FormPaper>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <FormPaper
            firsts
            title={t('section.policyTypes.title')}
            actions={
              <PermissionCheck permissions={'USER_ADMIN'}>
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeCreateMode('timeOffType', true);
                  }}
                >
                  {t('newType')}
                </Button>
              </PermissionCheck>
            }
          >
            <TimeOffPolicyTypeListContainer />
            <TimeOffPolicyTypeCreateModal
              title={t('createTimeOffType')}
              open={createMode?.timeOffType}
              onClose={() => {
                onChangeCreateMode('timeOffType', false);
              }}
            />
          </FormPaper>
        </Grid>
      </Grid>
    </>
  );
};
export default memo(TimeOffPoliciesContainer);
