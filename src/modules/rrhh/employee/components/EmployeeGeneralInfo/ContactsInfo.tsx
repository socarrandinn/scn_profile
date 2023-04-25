/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo } from 'react';
import { PermissionCheck } from '@dfl/react-security';
import { Box, Button, Stack } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import ContactsInfoForm from 'modules/rrhh/employee/containers/EmploySections/ContactsInfoForm';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces';
import ContactsViewMode from 'modules/rrhh/employee/components/EmployeeGeneralInfo/ContactsViewMode';
import { LoadingButton } from '@dfl/mui-react-common';

interface ContactsInfoProps {
  viewMode: boolean;
  onChangeViewMode: (section: string, viewMode: boolean) => void;
  data?: IEmployeeContactInfo;
  isLoading: boolean
}

const ContactsInfo = ({ viewMode, onChangeViewMode, data, isLoading }: ContactsInfoProps) => {
  const { t } = useTranslation('employee');

  return (
        <FormPaper
            title={t('section.contact.title')}
            actions={
                <PermissionCheck permissions={'USER_ADMIN'}>
                    {viewMode
                      ? <Button variant="text" onClick={() => {
                        onChangeViewMode('contacts', false);
                      }}>{t('updateInfo')}</Button>
                      : <Button variant="text" onClick={() => {
                        onChangeViewMode('contacts', true);
                      }}>{t('close')}</Button>
                    }
                </PermissionCheck>
            }
            sx={{ marginBottom: '1rem' }}
        >
            {viewMode
              ? <ContactsViewMode data={data} />
              : <Stack>
                    <ContactsInfoForm/>
                    <PermissionCheck permissions={'USER_ADMIN'}>
                        <Box pt={4} pb={0}>
                            <Stack alignItems='flex-end'>
                                <LoadingButton variant='contained' type={'submit'} loading={isLoading}>
                                    {t('common:saveChange')}
                                </LoadingButton>
                            </Stack>
                        </Box>
                    </PermissionCheck>
                </Stack>
            }
        </FormPaper>
  );
};

export default memo(ContactsInfo);
