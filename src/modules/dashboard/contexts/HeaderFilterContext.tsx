import React, { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import {
  DATES_OPTIONS_ENUM,
  Filter,
  TablaHeaderOptions,
  TableProvider,
  TableToolbarActions,
  useParseFilter,
  useTable,
  useTablePagination,
  useTableSearch,
} from '@dfl/mui-admin-layout';
import { useSearchParamsChange } from '@dfl/react-security';
import { useInterval, INTERVAL } from 'components/libs/analytic/hooks/useInterval';
import { useToggle } from '@dfl/hook-utils';
import { Stack, Theme } from '@mui/material';
import { PageHeader } from 'components/libs/PageHeader';
import { FilterFactory } from '@dofleini/query-builder';
import { useTranslation } from 'react-i18next';

// Data value of the provider context
type ContextValue = {
  interval?: INTERVAL;
};
// default value of the context
const defaultValue: ContextValue = {};

// create context
const Context = createContext<ContextValue>(defaultValue);

// Proptypes of Provider component
type HeaderFilterContextProps = {
  id: string;
  intervalFilter?: string;
  title?: string;
  filters?: Filter[];
  children: ReactNode | undefined;
};

/**
 * Provider component
 * */
const HeaderFilterContext = ({ intervalFilter, title, children, ...props }: HeaderFilterContextProps) => {
  const { value, update } = useSearchParamsChange(intervalFilter);
  const interval = useInterval(value as string);

  useEffect(() => {
    if (!value) {
      update({ [intervalFilter as string]: DATES_OPTIONS_ENUM.LAST_SEVEN_DAYS });
    }
  }, []);

  return (
    <Context.Provider value={{ interval }} {...props}>
      <TableProvider {...props}>
        <HeaderFilterListToolbar title={title} />
        {children}
      </TableProvider>
    </Context.Provider>
  );
};

// Default hook to retrieve context data
const useHeaderFilterContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { HeaderFilterContext, useHeaderFilterContext };

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        create: false,
      },
      search: {
        disabled: true,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};
const HeaderFilterListToolbar = ({ title }: { title?: string }) => {
  const { settings } = useToolbarSetting();
  const { t } = useTranslation();
  return (
    <PageHeader mb={1} title={t(title || 'dashboard')}>
      <Stack
        sx={(theme: Theme) => ({
          '& .MuiFormControl-root, .MuiButtonBase-root': {
            backgroundColor: theme.palette.background.paper,
          },
        })}
      >
        <TableToolbarActions settings={settings} />
      </Stack>
    </PageHeader>
  );
};

export const useHeaderTableFilter = () => {
  const { filters } = useTable();
  const { query: search } = useTableSearch();
  const urlFilterObj = useParseFilter(filters);
  const { page, rowsPerPage: size } = useTablePagination();

  return useMemo(() => {
    const filters = FilterFactory.factory(urlFilterObj);
    if (Object.keys(filters).length === 0) return {};
    return { filters, search, page, size };
  }, [urlFilterObj, page, search, size]);
};
