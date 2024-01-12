import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { Checkbox } from '@mui/material';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';

interface IAudienceTargetSelect {
  control: Control<IOrderStatus, any>;
}

const AudienceTargetSelect = ({ control }: IAudienceTargetSelect) => {
  const { t } = useTranslation('orderStatus');
  const renderLabel = (option: string) => { return t(`fields.audienceTarget.${option}`) };
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
        <li {...props} key={option}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {t(`fields.audienceTarget.${option}`)}
        </li>
    );
  };

  return (
    <FormAsyncSelectAutocompleteField
      name='notification.audience.target'
      control={control}
      multiple={true}
      disableCloseOnSelect={true}
      label={t('fields.notification.audienceTarget')}
      fetchFunc={OrderStatusService.searchAudience}
      fullWidth={true}
      autoHighlight
      queryKey=''
      id='select-audience-target'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default AudienceTargetSelect;
