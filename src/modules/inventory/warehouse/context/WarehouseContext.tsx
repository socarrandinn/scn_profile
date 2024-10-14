import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFindOneStore } from 'modules/inventory/warehouse/hooks/useFindOneStore';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import useMultipleToggle from 'hooks/useMultipleToggle';

type WarehouseContextValue = {
  warehouse?: IWarehouse;
  isLoading: boolean;
  setStore?: Dispatch<SetStateAction<IWarehouse | undefined>>;
  error?: any;
  warehouseId: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};
const defaultValue: WarehouseContextValue = {
  isLoading: true,
  warehouseId: '',
};

// create context
const WarehouseContext = createContext<WarehouseContextValue>(defaultValue);

type WarehouseContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
  form_3: false,
  form_4: false,
  form_5: false,
};

const WarehouseDetailProvider = (props: WarehouseContextProps) => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get('edit');
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data, error } = useFindOneStore(id ?? null);
  const [warehouse, setStore] = useState<IWarehouse>();
  useBreadcrumbName(id || '', warehouse?.name, isLoading);

  useEffect(() => {
    if (isEdit && !isLoading && data && !warehouse) {
      onAllToggle?.();
    }
  }, [isEdit, data, onAllToggle, isLoading, warehouse]);

  useEffect(() => {
    if (data) {
      setStore(data);
    }
  }, [data, setStore]);

  return (
    <WarehouseContext.Provider
      value={{
        warehouse,
        setStore,
        isLoading,
        error,
        warehouseId: id as string,
        onAllToggle,
        onOneClose,
        onOneOpen,
        onOneToggle,
        state,
        allOpen,
      }}
      {...props}
    />
  );
};

const useWarehouseDetail = () => {
  const context = useContext(WarehouseContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { WarehouseDetailProvider, useWarehouseDetail };
