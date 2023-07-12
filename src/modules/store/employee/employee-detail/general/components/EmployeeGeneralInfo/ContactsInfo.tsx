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
import ContactsInfoForm from 'modules/store/employee/management/containers/EmploySections/ContactsInfoForm';
import ContactsViewMode from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo/ContactsViewMode';
import { HandlerError, LoadingButton, Form } from '@dfl/mui-react-common';
import { IAction } from 'modules/store/employee/common/interfaces/IViewMode';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeContactsInfoUpdate } from 'modules/store/employee/employee-detail/general/hooks/useEmployeeContactsInfoUpdate';

interface ContactsInfoProps {
  viewMode: boolean;
  setViewMode: IAction;
}

const ContactsInfo = ({ viewMode, setViewMode }: ContactsInfoProps) => {
  const { t } = useTranslation('employee');
  const { hasPermission } = useSecurity();
  const { employee } = useEmployeeDetail();

  const { control, onSubmit, isLoading, error, reset } = useEmployeeContactsInfoUpdate(
    // @ts-ignore
    employee,
    setViewMode,
  );

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
          title={t('section.contact.title')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              {viewMode
                ? (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('contacts', false);
                  }}
                >
                  {t('updateInfo')}
                </Button>
                  )
                : (
                <Button
                  variant='text'
                  onClick={() => {
                    onChangeViewMode('contacts', true);
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
            <ContactsViewMode data={employee?.contacts} />
          ) : (
            <Stack>
              <ContactsInfoForm />
              <PermissionCheck permissions={'USER_ADMIN'}>
                <Box pt={4} pb={0}>
                  <Stack direction='row' gap={2} justifyContent='flex-end' alignItems='center' width='100%'>
                    <Button
                      onClick={() => {
                        onChangeViewMode('contacts', true);
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

export default memo(ContactsInfo);
