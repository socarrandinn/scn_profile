import React, { memo } from 'react';
import { List, ListItem, ListItemText, Switch, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ActionsManufacture = () => {
  const { t } = useTranslation('manufacture');
  const handleChange = () => {};
  return (
    <List dense>
      <ListItem key={'switch-list-label-lock'}>
        <ListItemText
          id={'switch-list-label-lock'}
          primary={t('fields.state')}
          secondary={
            <Typography fontSize={'small'} color={'text.secondary'}>
              {t('statusDescription')}
            </Typography>
          }
        />
        <Switch onChange={handleChange} edge='end' />
      </ListItem>
    </List>
  );
};
export default memo(ActionsManufacture);
