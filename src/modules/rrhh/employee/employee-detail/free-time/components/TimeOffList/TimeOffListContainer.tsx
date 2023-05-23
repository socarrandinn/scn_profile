import React, { Fragment, memo } from 'react';
import { useParams } from 'react-router';
import { SkeletonList } from '@dfl/mui-react-common';
import { Button, Divider, Grid } from '@mui/material';
import { useFindEmployeeTimeOff } from 'modules/rrhh/employee/employee-detail/free-time/hooks/useFindEmployeeTimeOff';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import List from '@mui/material/List';
import ListItem from './components/ListItem';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

const TimeOffListContainer = () => {
  const { id } = useParams();
  const { t } = useTranslation('rrhh');
  const { isLoading, data } = useFindEmployeeTimeOff(id as string);

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
              <Button variant='text' onClick={() => {}}>
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
        </FormPaper>
      </Grid>
    </Grid>
  );
};

export default memo(TimeOffListContainer);
