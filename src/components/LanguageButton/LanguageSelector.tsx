import { FlexBox } from '@dfl/mui-react-common';
import { Link, Stack } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classNames from 'classnames';
import { SpainFlagIcon, UsaFlagIcon } from 'components/icons/locales';
import React, { FC, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

export type LanguageSelectorProps = {
  className?: string;
  compProps?: any;
  component?: any;
  icon?: ReactNode;
  mini: boolean;
};

const LanguageSelector: FC<LanguageSelectorProps> = ({ component = Link, className, icon, mini, compProps }) => {
  const { t, i18n } = useTranslation('locales');
  const locale = i18n?.language;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { className: componentClass, ...props } = compProps || {};

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng) // .then(() => queryClient.invalidateQueries());
    handleClose();
  };

  const Component = component;

  return (
    <div className={className}>
      <Component
        id='language-selector'
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classNames('cursor-pointer', componentClass)}
        sx={{ borderRadius: 10, py: 0, m: 0 }}
        {...props}
      >
        <Stack flexDirection={'row'} gap={0.5} alignItems={'center'} justifyContent={'center'} fontWeight={400} color={'#323233'}>
          {icon} {t(mini ? `mini-${locale}` : locale)}
        </Stack>
      </Component>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-selector',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(10px 0px 20px rgba(0, 0, 0, 0.23))',
            mt: 3,
            borderRadius: '8px',
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 75,
              width: 20,
              height: 20,
              borderRadius: '7px 0 0 0',
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguageHandler('en');
          }}
          key={'en'}
          selected={locale === 'en'}
        >
          <FlexBox gap={1}>
            <UsaFlagIcon />
            {t('en')}
          </FlexBox>
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguageHandler('es');
          }}
          key={'es'}
          selected={locale === 'es'}
        >
          <FlexBox gap={1}>
            <SpainFlagIcon />
            {t('es')}
          </FlexBox>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default memo(LanguageSelector);
