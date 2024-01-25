import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useFindOneManufacture } from 'modules/inventory/provider/manufacture/hooks/useFindOneManufacture';
import { useToggle } from '@dfl/hook-utils';

type ManufactureContextValue = {
  manufacture?: IManufacture;
  isLoading: boolean;
  error?: any;
  manufacturerId?: string;
  editIsOpen: boolean;
  closeEdit: () => void;
  openEdit: () => void;
};

// default value of the context
const defaultValue: ManufactureContextValue = {
  isLoading: true,
  editIsOpen: false,
  openEdit: () => {},
  closeEdit: () => {},
};

// create context
const ManufactureContext = createContext<ManufactureContextValue>(defaultValue);

// Proptypes of Provider component
type ManufactureContextProps = {
  children: any;
};

const ManufactureDetailProvider = (props: ManufactureContextProps) => {
  const { id } = useParams();
  const { isOpen, onClose, onOpen } = useToggle(false);

  const { isLoading, data: manufacture, error } = useFindOneManufacture(id ?? null);

  return (
    <ManufactureContext.Provider
      value={{
        manufacture,
        isLoading,
        error,
        manufacturerId: id as string,
        editIsOpen: isOpen,
        closeEdit: onClose,
        openEdit: onOpen,
      }}
      {...props}
    />
  );
};

const ManufactureDetail = () => {
  const context = useContext(ManufactureContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { ManufactureDetail, ManufactureDetailProvider };
