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
import { HandlerError, LoadingButton, Form } from '@dfl/mui-react-common';
import SocialMediaInfoForm from 'modules/rrhh/employee/containers/EmploySections/SocialMediaInfoForm';
import SocialMediaViewMode from 'modules/rrhh/employee/components/EmployeeGeneralInfo/SocialMediaViewMode';
import { IAction } from 'modules/rrhh/employee/interfaces/IViewMode';
import { useEmployeeDetail } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useEmployeeSocialInfoUpdate } from 'modules/rrhh/employee/hooks/useEmployeeSocialInfoUpdate';

interface SocialMediaInfoProps {
  viewMode: boolean;
  setViewMode: IAction
}

const SocialMediaInfo = ({ viewMode, setViewMode }: SocialMediaInfoProps) => {
  const { t } = useTranslation('employee');
  const { hasPermission } = useSecurity();
  const { employee } = useEmployeeDetail();

  const { control, onSubmit, isLoading, error, reset } = useEmployeeSocialInfoUpdate(
    // @ts-ignore
    employee,
    setViewMode
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
                title={t('section.social.title')}
                actions={
                    <PermissionCheck permissions={'USER_ADMIN'}>
                        {viewMode
                          ? <Button variant="text" onClick={() => {
                            onChangeViewMode('social', false);
                          }}>{t('updateInfo')}</Button>
                          : <Button variant="text" onClick={() => {
                            onChangeViewMode('social', true);
                          }}>{t('close')}</Button>
                        }
                    </PermissionCheck>
                }
                sx={{ marginBottom: '1rem' }}
                mbHeader={1}
            >
                {viewMode
                  ? <SocialMediaViewMode data={employee?.social} />
                  : <Stack>
                        <SocialMediaInfoForm/>
                        <PermissionCheck permissions={'USER_ADMIN'}>
                            <Box pt={4} pb={0}>
                                <Stack direction="row" gap={2} justifyContent="flex-end" alignItems='center' width="100%">
                                    <Button onClick={() => {
                                      onChangeViewMode('social', true);
                                      // @ts-ignore
                                      employee && reset(employee);
                                    }}>
                                        {t('common:cancel')}
                                    </Button>
                                    <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                                        {t('common:saveChange')}
                                    </LoadingButton>
                                </Stack>
                            </Box>
                        </PermissionCheck>
                    </Stack>
                }
            </FormPaper>
        </Form>
      </>
  );
};

export default memo(SocialMediaInfo);
