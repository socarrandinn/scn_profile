import React, { useMemo } from 'react';
import { WarehouseLocation } from '../../interfaces';
import { findProvinceByStateCode } from '@dfl/location';

const StoreLocationsCell = ({ locations }: { locations: WarehouseLocation[] }) => {
  const states = locations?.[0]?.states;
  const locationsStates = useMemo(() => states?.map((pv) => findProvinceByStateCode(pv)?.name || pv), [states]);

  return (
    <div>
      {locationsStates.map((state) => (
        <div key={state}>{state}</div>
      ))}
    </div>
  );
};

export default StoreLocationsCell;
