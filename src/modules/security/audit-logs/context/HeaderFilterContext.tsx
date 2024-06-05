import { createContext, ReactNode, useContext, useMemo } from 'react';
import {
  Filter,
  TablaHeaderOptions,
  TableProvider,
  TableToolbarActions,
} from '@dfl/mui-admin-layout';
import { useSearchParamsChange } from '@dfl/react-security';
import { INTERVAL } from 'modules/inventory/provider/supplier/constants/supplier.enum';
import { useInterval } from 'components/libs/analytic/hooks/useInterval';
import { useToggle } from '@dfl/hook-utils';
import { Stack, Theme } from '@mui/material';

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
  filters?: Filter[];
  children: ReactNode | undefined;
};

/**
 * Provider component
 * */
const HeaderFilterContext = ({ intervalFilter, children, ...props }: HeaderFilterContextProps) => {
  const { value } = useSearchParamsChange(intervalFilter);
  const interval = useInterval(value as string);

  /* useEffect(() => {
    if (!value) {
      update({ [intervalFilter as string]: DATES_OPTIONS_ENUM.LAST_SEVEN_DAYS });
    }
  }, [value, intervalFilter]); */

  return (
    <Context.Provider value={{ interval }} {...props}>
      <TableProvider {...props}>
        <AuditLogHeaderFilterListToolbar />
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
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};
const AuditLogHeaderFilterListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <Stack
      sx={(theme: Theme) => ({
        '& .MuiFormControl-root, .MuiButtonBase-root': {
          backgroundColor: theme.palette.background.paper,
        },
      })}
      mb={{ xs: 1, md: 2 }}
    >
      <TableToolbarActions settings={settings} />
    </Stack>
  );
};
