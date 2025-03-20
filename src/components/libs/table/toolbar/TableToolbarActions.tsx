import { memo, useMemo } from 'react';
import { Button, ButtonProps, Stack } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ChildrenProps, ConditionContainer, Search } from '@dfl/mui-react-common';
import { deepmerge } from '@mui/utils';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@dfl/react-security';
import { useTableSearch } from '@dfl/mui-admin-layout';
import { FilterList } from './FilterList';
import { TableHeaderOptions } from './TableHeaderOptions';
import { ExcludeFilterMenu } from './FilterSelected/ExcludeFilterMenu';

const defaultAction: TableHeaderOptions = {
  filter: {
    disabled: false,
    activeMenu: false,
    defaultFilterKeys: [],
  },
  search: {
    placeholder: 'search',
  },
  actions: {
    create: true,
    createAction: () => {},
    createText: 'add',
  },
};

type TablaHeaderProps = ChildrenProps & {
  settings?: TableHeaderOptions;
};

const searchSx = {
  flexGrow: 1,
};
const directionResponsive: Record<string, 'row' | 'column'> = {
  xs: 'column',
  sm: 'row',
};

type ActionProps = Omit<ButtonProps, 'action'> & {
  action?: () => void;
};
type AddActionProps = Omit<ButtonProps, 'action'> & {
  action?: (() => void) | string;
};

export const AddButtonBase = ({ action, ...props }: AddActionProps) => {
  if (typeof action === 'string') {
    // @ts-ignore
    return <ButtonLink {...props} to={action} />;
  }

  return <Button {...props} onClick={action} />;
};

export const AddButton = ({ action, children, ...props }: AddActionProps) => {
  const { t } = useTranslation('common');

  return (
    <AddButtonBase variant={'contained'} startIcon={<AddOutlinedIcon />} action={action} {...props}>
      <span>{children || t('add')}</span>
    </AddButtonBase>
  );
};

export const ImportButton = ({ action, children, ...props }: ActionProps) => {
  const { t } = useTranslation('common');

  return (
    <Button variant={'outlined'} onClick={action} startIcon={<FileUploadOutlinedIcon />} {...props}>
      <span>{children || t('import')}</span>
    </Button>
  );
};

export const ExportButton = ({ action, children, ...props }: ActionProps) => {
  const { t } = useTranslation('common');

  return (
    <Button variant={'outlined'} onClick={action} startIcon={<FileDownloadOutlinedIcon />} {...props}>
      <span>{children || t('export')}</span>
    </Button>
  );
};

const TableToolbarActions = ({ settings = {}, children }: TablaHeaderProps) => {
  const settingActions: TableHeaderOptions = useMemo(() => deepmerge(defaultAction, settings), [settings]);
  const { t } = useTranslation('common');
  const { setQuery, query } = useTableSearch();

  return (
    <Stack direction={directionResponsive} spacing={{ xs: 1, md: 2 }} sx={{ width: '100%' }}>
      <FilterList
        flexGrow={1}
        hideFilters={settingActions.filter?.disabled}
        hasActiveMenu={settingActions.filter?.activeMenu}
        defaultFilterKeys={settingActions.filter?.defaultFilterKeys}
      >
        <ConditionContainer active={settingActions.filter?.activeMenu}>
          <ExcludeFilterMenu />
        </ConditionContainer>

        <Box sx={searchSx}>
          <ConditionContainer active={!settingActions?.search?.disabled}>
            <Search
              initValue={(query as string) || ''}
              placeholder={t(settingActions.search?.placeholder || 'search')}
              size={'small'}
              onSearch={setQuery}
              fullWidth
            />
          </ConditionContainer>
        </Box>
      </FilterList>

      {children}

      <ConditionContainer active={settingActions.actions?.import}>
        <ImportButton action={settingActions.actions?.importAction} disabled />
      </ConditionContainer>

      <ConditionContainer active={settingActions.actions?.export}>
        <ExportButton action={settingActions.actions?.exportAction} disabled />
      </ConditionContainer>

      <ConditionContainer active={settingActions.actions?.create}>
        <AddButton variant={'contained'} startIcon={<AddOutlinedIcon />} action={settingActions.actions?.createAction}>
          <span>{t(settingActions.actions?.createText || 'add')}</span>
        </AddButton>
      </ConditionContainer>
    </Stack>
  );
};

export default memo(TableToolbarActions);
