import * as React from 'react';
import { memo, useCallback, useMemo } from 'react';
import List from '@mui/material/List';
import { ListItem, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';

type Props = {
  add?: boolean;
  selectedCount: number;
  allCount: number;
  selectedAction: () => void;
  allAction: () => void;
  onClose?: () => void;
};

const ItemActions = ({ add, onClose, selectedCount, selectedAction, allCount, allAction }: Props) => {
  const { t } = useTranslation('dispatch');

  const key = useMemo(() => {
    return add ? 'create' : 'addTo';
  }, [add]);

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
          <ListItemText primary={t(`dispatch.menus.${key}.selected`, { count: selectedCount })} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleAllAction}>
          <ListItemText primary={t(`dispatch.menus.${key}.all`, { count: allCount })} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default memo(ItemActions);
