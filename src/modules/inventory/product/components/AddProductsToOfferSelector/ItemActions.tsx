import { ListItem, ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type ItemActionsProps = {
  selectedCount: number;
  allCount: number;
  selectedAction: () => void;
  allAction: () => void;
  onClose?: () => void;
};

const ItemActions = ({ onClose, selectedCount, selectedAction, allCount, allAction }: ItemActionsProps) => {
  const { t } = useTranslation('productDiscount');

  const handleSelectedAction = useCallback(() => {
    selectedAction?.();
    onClose?.();
  }, [selectedAction, onClose]);

  const handleAllAction = useCallback(() => {
    allAction?.();
    onClose?.();
  }, [allAction, onClose]);

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={handleSelectedAction} disabled={selectedCount <= 0}>
          <ListItemText primary={t('productBulk.menus.selected', { count: selectedCount })} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleAllAction} disabled={allCount <= 0}>
          <ListItemText primary={t('productBulk.menus.all', { count: allCount })} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default memo(ItemActions);
