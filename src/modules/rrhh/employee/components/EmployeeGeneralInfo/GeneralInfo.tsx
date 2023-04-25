/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo } from 'react';
import { PermissionCheck } from '@dfl/react-security';
import { Box, Button, Stack } from '@mui/material';
import GeneralViewMode from 'modules/rrhh/employee/components/EmployeeGeneralInfo/GeneralViewMode';
import GeneralInfoForm from 'modules/rrhh/employee/containers/EmploySections/GeneralInfoForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IEmployeeGeneralInfo } from 'modules/rrhh/employee/interfaces';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';

interface GeneralInfoProps {
  viewMode: boolean;
  onChangeViewMode: (section: string, viewMode: boolean) => void;
  data?: IEmployeeGeneralInfo;
  isLoading: boolean;
}

const GeneralInfo = ({ viewMode, onChangeViewMode, data, isLoading }: GeneralInfoProps) => {
  const { t } = useTranslation('employee');

  return (
        <FormPaper
            firsts
            title={t('section.general.title')}
            actions={
                <PermissionCheck permissions={'USER_ADMIN'}>
                    {viewMode
                      ? <Button variant="text" onClick={() => {
                        onChangeViewMode('general', false);
                      }}>{t('updateInfo')}</Button>
                      : <Button variant="text" onClick={() => {
                        onChangeViewMode('general', true);
                      }}>{t('close')}</Button>
                    }
                </PermissionCheck>
            }
        >
            {viewMode
              ? <GeneralViewMode data={data} />
              : <Stack>
                    <GeneralInfoForm/>
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

export default memo(GeneralInfo);
