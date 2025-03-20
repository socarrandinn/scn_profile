import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import { Avatar, ListItemIcon, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useGetMySpaces } from 'hooks/useGetMySpaces';
import { useToggle } from '@dfl/hook-utils';
import { useChangeSpaces } from 'hooks/useChangeSpaces';
import dflLogo from 'assets/logo.png';

const options = ['80%', '50%', '70%', '30%'];
const loadingSkeleton = options.map((option) => (
  <MenuItem key={option}>
    <ListItemIcon>
      <Skeleton variant='rectangular' width={24} height={24} />
    </ListItemIcon>
    <ListItemText>
      <Skeleton variant='text' sx={{ fontSize: '0.75rem' }} width={option} />
    </ListItemText>
  </MenuItem>
));
const SpaceSelector = () => {
  const { t } = useTranslation('common');
  // const space = useUser().user?.space;
  const { isOpen: ladMySpaces, onOpen } = useToggle(false);
  const { data, isLoading } = useGetMySpaces(ladMySpaces);
  const { changeSpace, isLoading: isChangingSpace } = useChangeSpaces();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onOpen();
  };
  const space = {
    name: 'Admin Template',
    logo: dflLogo,
    identifier: 'Sys Admin',
    _id: 0,
  };
  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(null);
    if (data[index]?.identifier !== space?.identifier) changeSpace(data[index]?.identifier);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {}, []);

  const isLoadingSpace = isChangingSpace || !space;

  return (
    <div>
      <List component='nav' aria-label='Device settings' sx={{ bgcolor: 'background.paper' }}>
        <ListItem
          id='space-button'
          aria-haspopup='listbox'
          aria-controls='space-menu'
          aria-label='space selector'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemButton>
            <ListItemIcon>
              {isLoadingSpace ? (
                <Skeleton variant='rectangular' width={40} height={40} />
              ) : (
                <Avatar
                  variant={'rounded'}
                  alt={space?.name}
                  src={space?.logo}
                  sx={{
                    bgcolor: 'primary.light',
                  }}
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                isLoadingSpace ? <Skeleton variant='text' sx={{ fontSize: '0.75rem' }} width={'30%'} /> : space?.name
              }
              secondary={
                isLoadingSpace ? (
                  <Skeleton variant='text' sx={{ fontSize: '0.75rem' }} width={'80%'} />
                ) : (
                  space?.identifier
                )
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Menu
        id='space-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'space-button',
          role: 'listbox',
        }}
      >
        <MenuItem disabled>{t('selectSpaceToChange')}</MenuItem>
        {isLoading
          ? loadingSkeleton
          : data?.map((option: any, index: number) => (
              <MenuItem
                key={option._id}
                selected={space?._id === option._id}
                onClick={(event) => {
                  handleMenuItemClick(event, index);
                }}
              >
                <ListItemIcon>
                  <Avatar
                    variant={'rounded'}
                    alt={option.name}
                    src={option.logo}
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: 'primary.light',
                    }}
                  />
                </ListItemIcon>
                <ListItemText>{option.name}</ListItemText>
              </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default SpaceSelector;
