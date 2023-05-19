import React, { memo, useCallback, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import EmployeeRuleListContainer from 'modules/rrhh/employee/containers/EmployeeRuleListContainer';
import { PermissionCheck } from '@dfl/react-security';
import EmployeeRuleTypeListContainer from 'modules/rrhh/employee/containers/EmployeeRuleTypeListContainer';

const EmployeeFreeTime = ({ isAccount }: { isAccount?: boolean }) => {
  const { t } = useTranslation('employee');

  const [createMode, setCreateMode] = useState({
    rule: false,
    ruleType: false,
  });

  const onChangeCreateMode = useCallback((section: string, value: boolean) => {
    setCreateMode((prev) => ({ ...prev, [section]: value }));
  }, []);

  return (
    <Grid container spacing={[0, 2]}>
      <Grid item xs={8}>
        <FormPaper
          firsts
          title={t('section.rules.title')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              <Button
                variant='text'
                onClick={() => {
                  onChangeCreateMode('rule', true);
                }}
              >
                {t('newRule')}
              </Button>
            </PermissionCheck>
          }
        >
          <EmployeeRuleListContainer />
        </FormPaper>
      </Grid>
      <Grid item xs={4}>
        <FormPaper
          firsts
          title={t('section.rules.types.title')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              <Button
                variant='text'
                onClick={() => {
                  onChangeCreateMode('ruleType', true);
                }}
              >
                {t('newType')}
              </Button>
            </PermissionCheck>
          }
        >
          <EmployeeRuleTypeListContainer />
        </FormPaper>
      </Grid>
    </Grid>
  );
};

export default memo(EmployeeFreeTime);
