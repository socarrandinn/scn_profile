import {
  Card,
  CardContent,
  List,
  ListItem as MuiListItem,
  ListItemAvatar,
  Typography,
  Chip,
  ListItemText, styled
} from '@mui/material';
import { memo } from 'react';
import EmployerNewSkeleton from './EmployerNewSkeleton';
import { DateValue } from '@dfl/mui-react-common';
import { useFindEmployNew } from '../../hooks/useFindEmployNew';
import { AvatarMedia } from 'components/AvatarMedia';
import { useTranslation } from 'react-i18next';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRadius: 6,
  marginBottom: 6
}));

const EmployerNew = () => {
  const { data, isLoading } = useFindEmployNew();
  const { t } = useTranslation('dashboard');

  if (isLoading || !data) {
    return <EmployerNewSkeleton/>;
  }

  if (!data || !data?.length) {
    return (<></>)
  }

  return (
        <Card>
            <CardContent sx={{ paddingBottom: '7px!important' }}>
                <Typography variant='h2' gutterBottom>
                    {t('employees.new')}
                </Typography>
                <List dense>
                    {data?.map((value: IEmployee) => {
                      return (
                            <ListItem key={value._id}
                                      secondaryAction={
                                          <Chip
                                              color='primary'
                                              size='medium'
                                              sx={{
                                                height: 'auto',
                                                width: 'auto',
                                                '& .MuiChip-label': {
                                                  display: 'block',
                                                  whiteSpace: 'normal',
                                                },
                                              }}
                                              label={<DateValue value={value.hiring.date} fromNow/>}
                                          />
                                      }>
                                <ListItemAvatar>
                                    <AvatarMedia alt={value.general.firstName} avatar={value.general.avatar}/>
                                </ListItemAvatar>
                                <ListItemText primary={`${value.general.firstName} ${value.general.lastName}`}
                                              secondary={value.jobInformation.position.name}/>
                            </ListItem>
                      )
                    })}
                </List>
            </CardContent>
        </Card>
  );
};
export default memo(EmployerNew);
