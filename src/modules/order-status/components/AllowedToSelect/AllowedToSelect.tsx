import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { allowedToMock } from 'modules/order-status/constants/allowed-to-mock';

interface IAllowedToSelect {
  control: Control<IOrderStatus, any>;
}

const AllowedToSelect = ({ control }: IAllowedToSelect) => {
  const { t } = useTranslation('orderStatus');

  return (
    <FormSelectAutocompleteField
      fullWidth={true}
      name='allowTo'
      control={control}
      label={t('fields.allowedTo')}
      multiple={true}
      options={allowedToMock.map((value) => ({
        label: value.name,
        id: value._id,
      }))}
    />
  );
};

export default AllowedToSelect;
