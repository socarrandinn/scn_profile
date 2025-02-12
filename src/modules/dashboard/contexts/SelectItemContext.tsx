import React, { createContext, ReactNode, useContext, useState } from 'react';
import { TypeMapView } from 'modules/dashboard/constant/TypeViewMap';

const defaultValue: any = {
  select: null,
  setSelect: () => {
  },
  typeView: '',
  setTypeView: () => {
  },
};

const SelectItemContext = createContext<any>(defaultValue);

type SelectItemContextProps = {
  children: ReactNode | undefined;
};

const MapContext = ({ children }: SelectItemContextProps) => {
  const [select, setSelect] = useState<any>(null);
  const [typeView, setTypeView] = useState<string>(TypeMapView.DISTRIBUTION_CENTER);

  return (
    <SelectItemContext.Provider value={{ select, setSelect, typeView, setTypeView }}>
      {children}
    </SelectItemContext.Provider>
  );
};

const useMapContext = () => {
  const context = useContext(SelectItemContext);
  if (context === undefined) {
    return {};
  }
  return context;
};

export { MapContext, useMapContext };
