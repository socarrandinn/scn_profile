import { IManufacture } from 'modules/provider/manufacture/interfaces';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router'
import { useFindOneManufacture } from 'modules/provider/manufacture/hooks/useFindOneManufacture';

type ManufactureContextValue = {
  manufacture?: IManufacture;
  isLoading: boolean;
  error?: any;
  manufacturerId?: string;
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

const ManufactureDetailProvider = (props: ManufactureContextProps) => {
  const { id } = useParams();

  const { isLoading, data: manufacture, error } = useFindOneManufacture(id ?? null);

  return <ManufactureContext.Provider
        value={{ manufacture, isLoading, error, manufacturerId: id as string }} {...props} />;
};

const ManufactureDetail = () => {
  const context = useContext(ManufactureContext)
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
}

export { ManufactureDetail, ManufactureDetailProvider }
