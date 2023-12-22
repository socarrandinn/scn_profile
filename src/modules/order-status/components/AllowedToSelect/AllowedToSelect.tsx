import { SelectAutocompleteField } from '@dfl/mui-react-common';
import { SyntheticEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { allowedToMock } from 'modules/order-status/constants/allowed-to-mock';

interface IAllowedToSelect {
  setValue: UseFormSetValue<IOrderStatus>;
}

const AllowedToSelect = ({ setValue }: IAllowedToSelect) => {
  const { t } = useTranslation('orderStatus');

  return (
    <SelectAutocompleteField
      fullWidth={true}
      label={t('fields.allowedTo')}
      multiple={true}
      options={allowedToMock.map((value) => ({
        label: value.name,
        id: value._id,
      }))}
      onChange={(e: SyntheticEvent<Element, Event>) => {
        setValue(
          'allowTo',
          /// @ts-ignore
          e.target.value.map((value) => {
            return value.id;
          }) as string[],
        );
      }}
    />
  );
};

export default AllowedToSelect;
