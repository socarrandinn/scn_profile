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
import { IAddress } from 'modules/common/interfaces';
import AddressViewMode from 'modules/rrhh/employee/components/EmployeeGeneralInfo/AddressViewMode';
import AddressInfoForm from 'modules/rrhh/employee/containers/EmploySections/AddressInfoForm';
import { LoadingButton } from '@dfl/mui-react-common';

interface AddressInfoProps {
  viewMode: boolean;
  onChangeViewMode: (section: string, viewMode: boolean) => void;
  data?: IAddress;
  isLoading: boolean
}

const AddressInfo = ({ viewMode, onChangeViewMode, data, isLoading }: AddressInfoProps) => {
  const { t } = useTranslation('employee');

  return (
        <FormPaper
            title={t('section.address.title')}
            actions={
                <PermissionCheck permissions={'USER_ADMIN'}>
                    {viewMode
                      ? <Button variant="text" onClick={() => {
                        onChangeViewMode('address', false);
                      }}>{t('updateInfo')}</Button>
                      : <Button variant="text" onClick={() => {
                        onChangeViewMode('address', true);
                      }}>{t('close')}</Button>
                    }
                </PermissionCheck>
            }
        >
            {viewMode
              ? <AddressViewMode data={data} />
              : <Stack>
                    <AddressInfoForm/>
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

export default memo(AddressInfo);
