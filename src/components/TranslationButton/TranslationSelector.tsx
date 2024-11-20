import { FlexBox } from '@dfl/mui-react-common';
import { Link, Stack, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useQueryClient } from '@tanstack/react-query';
import classNames from 'classnames';
import { SpainFlagIcon, UsaFlagIcon } from 'components/icons/locales';
import React, { FC, ReactNode, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorageDataLang from './useLocalStorageDataLang';
import { TRANSLATION_KEY } from 'settings/globals';

export type TranslationSelectorProps = {
  className?: string;
  compProps?: any;
  component?: any;
  icon?: ReactNode;
  mini: boolean;
};

const TranslationSelector: FC<TranslationSelectorProps> = ({ component = Link, className, icon, mini, compProps }) => {
  const { t } = useTranslation('locales');
  const queryClient = useQueryClient();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { className: componentClass, ...props } = compProps || {};
  const { setValue, value } = useLocalStorageDataLang(TRANSLATION_KEY, 'es');
  const locale = value as string;

  const handleClick = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const changeLanguageHandler = useCallback(
    (lng: string) => {
      return new Promise<void>((resolve) => {
        setValue(lng);
        resolve();
      }).then(() => {
        queryClient.invalidateQueries();
        handleClose();
      });
    },
    [handleClose, queryClient, setValue],
  );

  const Component = component;

  return (
    <div className={className}>
      <Tooltip title={t('translation.description')} placement={'top'}>
        <Component
          id='language-selector'
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={classNames('cursor-pointer', componentClass)}
          sx={{ borderRadius: 10, p: 0, m: 0 }}
          {...props}
        >
          <Stack
            flexDirection={'row'}
            gap={0.5}
            alignItems={'center'}
            justifyContent={'center'}
            fontWeight={400}
            sx={{
              color: (theme) => (theme.palette.mode === 'dark' ? theme.palette.grey[400] : '#323233'),
            }}
          >
            {icon} {t('translation.title')} - {t(mini ? `mini-${locale}` : locale)}
          </Stack>
        </Component>
      </Tooltip>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-selector',
        }}
        slotProps={{
          paper: {
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

export default memo(TranslationSelector);
