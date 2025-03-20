import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import LogisticDetailBasicUpdateContainer from '../../containers/LogisticDetailBasicUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { LOGISTICS_PERMISSIONS } from '../../constants';

const LogisticGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <LogisticDetailBasicUpdateContainer
          initValue={{
            _id: logistic?._id,
            name: logistic?.name,
            handlingCost: logistic?.handlingCost || 0,
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
      title={t('fields.basicInformation')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]} />
      }
    >
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(logistic as ILogistics) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(LogisticGeneralBasic);

const getArray = (data: ILogistics): any[] => {
  const array = [
    {
      label: 'provider:fields.name',
      value: data?.name,
    },
  ];
  return array;
};
