/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useCallback } from 'react';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import { Box, Button, Stack } from '@mui/material';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import GeneralViewMode from 'modules/rrhh/employee/management/components/EmployeeGeneralInfo/GeneralViewMode';
import GeneralInfoForm from 'modules/rrhh/employee/management/containers/EmploySections/GeneralInfoForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useEmployeeGeneralInfoUpdate } from 'modules/rrhh/employee/management/hooks/useEmployeeGeneralInfoUpdate';
import { IAction } from 'modules/rrhh/employee/management/interfaces/IViewMode';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeDetail } from 'modules/rrhh/employee/management/contexts/EmployeeDetail';
import { CivilStatusEnum } from 'modules/rrhh/employee/management/constants/civil-status.enum';

interface GeneralInfoProps {
  viewMode: boolean;
  setViewMode: IAction;
}

const GeneralInfo = ({ viewMode, setViewMode }: GeneralInfoProps) => {
  const { t } = useTranslation('employee');
  const { hasPermission } = useSecurity();
  const { employee } = useEmployeeDetail();

  const { control, onSubmit, isLoading, error, reset, watch } = useEmployeeGeneralInfoUpdate(
    // @ts-ignore
    employee,
    setViewMode,
  );

  const isMarried = watch?.('general.civilStatus') === CivilStatusEnum.married;

  const onChangeViewMode = useCallback((section: string, value: boolean) => {
    setViewMode((prev) => ({ ...prev, [section]: value }));
  }, []);

  return (
    <>
      <Box mt={error ? 3 : 0}>
        <HandlerError error={error} errors={ACCOUNT_ERRORS} />
      </Box>

      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} readOnly={!hasPermission('USER_ADMIN')}>
        <FormPaper
          firsts
          title={t('section.general.title')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              {viewMode
                ? (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('general', false);
                  }}
                >
                  {t('updateInfo')}
                </Button>
                  )
                : (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('general', true);
                  }}
                >
                  {t('close')}
                </Button>
                  )}
            </PermissionCheck>
          }
        >
          {viewMode ? (
            <GeneralViewMode data={employee?.general} />
          ) : (
            <Stack>
              <GeneralInfoForm married={isMarried} />
              <PermissionCheck permissions={'USER_ADMIN'}>
                <Box pt={4} pb={0}>
                  <Stack direction='row' gap={2} justifyContent='flex-end' alignItems='center' width='100%'>
                    <Button
                      onClick={() => {
                        onChangeViewMode('general', true);
                        // @ts-ignore
                        employee && reset(employee);
                      }}
                    >
                      {t('common:cancel')}
                    </Button>
                    <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                      {t('common:saveChange')}
                    </LoadingButton>
                  </Stack>
                </Box>
              </PermissionCheck>
            </Stack>
          )}
        </FormPaper>
      </Form>
    </>
  );
};

export default memo(GeneralInfo);
