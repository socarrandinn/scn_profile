import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { IAddress } from 'modules/common/interfaces';
import { BasicTableDoubleColumnHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import LogisticDetailAddressUpdateContainer from '../../containers/LogisticDetailAddressUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { getArrayAddress, getDoubleColumnArrayAddress } from 'modules/inventory/common/constants/common-address.datatable';
import { LOGISTICS_PERMISSIONS } from '../../constants';

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
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]}
        />
      }
    >
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArrayAddress(logistic?.address as IAddress) || []}
        doubleColumnData={getDoubleColumnArrayAddress(logistic?.address as IAddress) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(LogisticGeneralAddress);
