import React, { memo, useState, useCallback } from 'react';
import EmployeeJobInformationListContainer from 'modules/rrhh/employee/management/containers/EmployeeJobInformationListContainer';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import EmployeeCompensationListContainer from 'modules/rrhh/employee/management/containers/EmployeeCompensationListContainer';
import EmployeeCategoryListContainer from './EmployeeCategoryListContainer';
import { PermissionCheck } from '@dfl/react-security';
import { Button } from '@mui/material';
import CategoryCreateModal from 'modules/rrhh/employee/management/containers/CategoryCreateModal';
import JobInformationCreateModal from 'modules/rrhh/employee/management/containers/JobInformationCreateModal';
import CompensationCreateModal from 'modules/rrhh/employee/management/containers/CompensationCreateModal';

const EmployeeWork = ({ isAccount }: { isAccount?: boolean }) => {
  const { t } = useTranslation('employee');

  const [createMode, setCreateMode] = useState({
    jobInformation: false,
    compensation: false,
    category: false,
  });

  const onChangeCreateMode = useCallback((section: string, value: boolean) => {
    setCreateMode((prev) => ({ ...prev, [section]: value }));
  }, []);

  return (
    <>
      <FormPaper
        firsts
        title={t('section.categories.title')}
        actions={
          <PermissionCheck permissions={'USER_ADMIN'}>
            <Button
              variant='text'
              onClick={() => {
                onChangeCreateMode('category', true);
              }}
            >
              {t('updateInfo')}
            </Button>
          </PermissionCheck>
        }
      >
        <EmployeeCategoryListContainer />
        <CategoryCreateModal
          open={createMode?.category}
          title={t('createCategory')}
          onClose={() => {
            onChangeCreateMode('category', false);
          }}
        />
      </FormPaper>

      <FormPaper
        title={t('section.job.title')}
        actions={
          <PermissionCheck permissions={'USER_ADMIN'}>
            <Button
              variant='text'
              onClick={() => {
                onChangeCreateMode('jobInformation', true);
              }}
            >
              {t('updateInfo')}
            </Button>
          </PermissionCheck>
        }
      >
        <EmployeeJobInformationListContainer />
        <JobInformationCreateModal
          open={createMode?.jobInformation}
          title={t('createJobInformation')}
          onClose={() => {
            onChangeCreateMode('jobInformation', false);
          }}
        />
      </FormPaper>

      <FormPaper
        title={t('section.compensation.title')}
        sx={{ marginBottom: 3 }}
        actions={
          <PermissionCheck permissions={'USER_ADMIN'}>
            <Button
              variant='text'
              onClick={() => {
                onChangeCreateMode('compensation', true);
              }}
            >
              {t('updateInfo')}
            </Button>
          </PermissionCheck>
        }
      >
        <EmployeeCompensationListContainer />
        <CompensationCreateModal
          open={createMode?.compensation}
          title={t('createCompensation')}
          onClose={() => {
            onChangeCreateMode('compensation', false);
          }}
        />
      </FormPaper>
    </>
  );
};

export default memo(EmployeeWork);
