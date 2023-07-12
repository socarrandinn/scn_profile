/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useCallback } from 'react';
import { PermissionCheck, useSecurity } from '@dfl/react-security';
import { Box, Button, Stack } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import AddressViewMode from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/AddressViewMode';
import AddressInfoForm from 'modules/store/employee/management/containers/EmploySections/AddressInfoForm';
import { HandlerError, LoadingButton, Form } from '@dfl/mui-react-common';
import { IAction } from 'modules/store/employee/common/interfaces/IViewMode';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';
import { useEmployeeAddressInfoUpdate } from 'modules/store/employee/employee-detail/general/hooks/useEmployeeAddressInfoUpdate';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';

interface AddressInfoProps {
  viewMode: boolean;
  setViewMode: IAction;
}

const AddressInfo = ({ viewMode, setViewMode }: AddressInfoProps) => {
  const { t } = useTranslation('employee');
  const { hasPermission } = useSecurity();
  const { employee } = useEmployeeDetail();

  const { control, onSubmit, isLoading, error, reset, watch } = useEmployeeAddressInfoUpdate(
    // @ts-ignore
    employee,
    setViewMode,
  );

  const state = watch('address.state');

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
          title={t('section.address.title')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              {viewMode
                ? (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('address', false);
                  }}
                >
                  {t('updateInfo')}
                </Button>
                  )
                : (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('address', true);
                  }}
                >
                  {t('close')}
                </Button>
                  )}
            </PermissionCheck>
          }
          mbHeader={1}
        >
          {viewMode ? (
            <AddressViewMode state={state} data={employee?.address} />
          ) : (
            <Stack>
              <AddressInfoForm state={state} />
              <PermissionCheck permissions={'USER_ADMIN'}>
                <Box pt={4} pb={0}>
                  <Stack direction='row' gap={2} justifyContent='flex-end' alignItems='center' width='100%'>
                    <Button
                      onClick={() => {
                        onChangeViewMode('address', true);
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

export default memo(AddressInfo);
