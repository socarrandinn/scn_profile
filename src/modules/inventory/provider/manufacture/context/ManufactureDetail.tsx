import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneManufacture } from 'modules/inventory/provider/manufacture/hooks/useFindOneManufacture';
import useMultipleToggle from 'hooks/useMultipleToggle';

type ManufactureContextValue = {
  manufacture?: IManufacture;
  isLoading: boolean;
  error?: any;
  manufacturerId?: string;
  onAllToggle?: (open?: boolean) => void;
  onOneClose?: (st: string) => void;
  onOneOpen?: (st: string) => void;
  onOneToggle?: (st: string) => void;
  state?: Record<string, boolean>;
  allOpen?: boolean;
};

// default value of the context
const defaultValue: ManufactureContextValue = {
  isLoading: true,
};

// create context
const ManufactureContext = createContext<ManufactureContextValue>(defaultValue);

// Proptypes of Provider component
type ManufactureContextProps = {
  children: any;
};

const states = {
  form_1: false,
  form_2: false,
};

const ManufactureDetailProvider = (props: ManufactureContextProps) => {
  const { id } = useParams();
  const { onAllToggle, onOneClose, onOneOpen, onOneToggle, state, allOpen } = useMultipleToggle(states);
  const { isLoading, data: manufacture, error } = useFindOneManufacture(id ?? null);

  return (
    <ManufactureContext.Provider
      value={{
        manufacture,
        isLoading,
        error,
        manufacturerId: id as string,
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

const useManufactureDetailContext = () => {
  const context = useContext(ManufactureContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useManufactureDetailContext, ManufactureDetailProvider };
