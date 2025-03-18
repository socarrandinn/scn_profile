import { memo } from 'react';
import AddressMapForm from './cuban/AddressMapForm';
import AddressInternationalMapForm from './internacional/AddressInternationalMapForm';
import { UseFormClearErrors } from 'react-hook-form';

type Props = {
  control: any;
  countryCode: string;
  name?: string;
  disabledLocation?: boolean;
  clearErrors: UseFormClearErrors<any>;
  collapsibleMap?: boolean;
  disabledFields?: string[];
};

const AddressMapContent = ({
  control,
  name,
  disabledLocation,
  countryCode,
  clearErrors,
  collapsibleMap,
  disabledFields,
}: Props) => {
  if (countryCode === 'CU') {
    return (
      <AddressMapForm
        {...{ control, name }}
        countryCode={countryCode}
        collapsibleMap={collapsibleMap}
        disabledFields={disabledFields}
      />
    );
  }

  return (
    <AddressInternationalMapForm
      {...{ control, name, disabledLocation }}
      clearErrors={clearErrors}
      countryCode={countryCode}
      collapsibleMap={collapsibleMap}
      disabledFields={disabledFields}
    />
  );
};

export default memo(AddressMapContent);
