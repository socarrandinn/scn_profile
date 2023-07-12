import React, { Fragment, memo, useState } from 'react';
import { HandlerError, SkeletonList } from '@dfl/mui-react-common';
import { Button, Divider } from '@mui/material';
import { useFindEmployeeCurrentTimeOff } from '../../hooks/useFindEmployeeCurrentTimeOff';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import ListItem from './components/ListItem';
import { IEmployeeTimeOff } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import TimeOffCreateModal from '../../containers/TimeOffCreateModal';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';

const TimeOffListContainer = () => {
  const { id } = useEmployeeDetail();
  const { t } = useTranslation('rrhh');
  const { isLoading, data, error } = useFindEmployeeCurrentTimeOff(id);
  const [createOpen, setCreateOpen] = useState(false);

  if (isLoading) {
    return (
            <FormPaper title={t('pendingFreeTime')}>
                <SkeletonList numberItemsToShow={4}/>
            </FormPaper>
    );
  }

  return (
        <FormPaper
            title={t('pendingFreeTime')}
            actions={
                    <Button
                        variant='text'
                        onClick={() => {
                          setCreateOpen(true);
                        }}
                    >
                        {t('requestFreeTime')}
                    </Button>
            }
        >
            <HandlerError error={error}/>
            <List>
                 {data?.map((item: IEmployeeTimeOff, idx: number) => (
                    <Fragment key={item?._id || idx}>
                        <ListItem item={item}/>
                        <Divider variant='inset' component='li' sx={{ marginLeft: 0 }}/>
                    </Fragment>
                 ))}
            </List>
            <TimeOffCreateModal
                title={'section.freeTime.create'}
                open={createOpen}
                employee={id }
                onClose={() => {
                  setCreateOpen(false);
                }}
            />
        </FormPaper>
  );
};

export default memo(TimeOffListContainer);
