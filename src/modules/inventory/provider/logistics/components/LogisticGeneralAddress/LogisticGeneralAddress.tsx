import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { IAddress } from 'modules/common/interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import LogisticDetailAddressUpdateContainer from '../../containers/LogisticDetailAddressUpdateContainer';
import { LOGISTICS_PERMISSIONS } from '../../constants';
import AddressMapView from 'components/AddressMapFormFields/AddressMapView';

const LogisticGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <LogisticDetailAddressUpdateContainer
          initValue={{
            _id: logistic?._id,
            address: logistic?.address,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('fields.address.address')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]} />
      }
    >
      <AddressMapView address={logistic?.address as IAddress} />
    </FormPaper>
  );
};

export default memo(LogisticGeneralAddress);
