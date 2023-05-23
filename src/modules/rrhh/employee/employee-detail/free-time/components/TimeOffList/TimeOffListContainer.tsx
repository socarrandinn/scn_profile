import React, { Fragment, memo, useState } from 'react';
import { useParams } from 'react-router';
import { SkeletonList } from '@dfl/mui-react-common';
import { Button, Divider, Grid } from '@mui/material';
import { useFindEmployeeTimeOff } from '../../hooks/useFindEmployeeTimeOff';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import List from '@mui/material/List';
import ListItem from './components/ListItem';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import TimeOffCreateModal from '../../containers/TimeOffCreateModal';

const TimeOffListContainer = () => {
  const { id } = useParams();
  const { t } = useTranslation('rrhh');
  const { isLoading, data } = useFindEmployeeTimeOff(id as string);
  const [createOpen, setCreateOpen] = useState(false);

  if (isLoading) {
    return (
      <FormPaper title={t('pendingFreeTime')}>
        <SkeletonList numberItemsToShow={4} />
      </FormPaper>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <FormPaper
          firsts
          title={t('pendingFreeTime')}
          actions={
            <PermissionCheck permissions={'USER_ADMIN'}>
              <Button
                variant='text'
                onClick={() => {
                  setCreateOpen(true);
                }}
              >
                {t('requestFreeTime')}
              </Button>
            </PermissionCheck>
          }
        >
          <List>
            {data?.data?.map((item: IEmployeeTimeOff, idx: number) => (
              <Fragment key={item?._id || idx}>
                <ListItem item={item} />
                <Divider variant='inset' component='li' sx={{ marginLeft: 0 }} />
              </Fragment>
            ))}
          </List>
          <TimeOffCreateModal
            title={'section.freeTime.create'}
            open={createOpen}
            onClose={() => {
              setCreateOpen(false);
            }}
          />
        </FormPaper>
      </Grid>
    </Grid>
  );
};

export default memo(TimeOffListContainer);
