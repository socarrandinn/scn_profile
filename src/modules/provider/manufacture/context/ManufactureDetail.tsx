import { IManufacture } from 'modules/provider/manufacture/interfaces';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { useFindOneManufacture } from 'modules/provider/manufacture/hooks/useFindOneManufacture';

type ManufactureContextValue = {
  manufacture?: IManufacture;
  isLoading: boolean;
  setManufacture?: Dispatch<SetStateAction<IManufacture | undefined>>;
  error?: any;
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

  const { isLoading, data, error } = useFindOneManufacture(id ?? null);

  const [manufacture, setManufacture] = useState<IManufacture>();

  useEffect(() => {
    if (data) {
      setManufacture(data);
    }
  }, [data, setManufacture]);

  return <ManufactureContext.Provider value={{ manufacture, setManufacture, isLoading, error }} {...props} />;
};

const ManufactureDetail = () => {
  const context = useContext(ManufactureContext)
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
}

export { ManufactureDetail, ManufactureDetailProvider }
