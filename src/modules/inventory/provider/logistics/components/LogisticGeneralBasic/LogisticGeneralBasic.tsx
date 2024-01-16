import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { CurrencyValue } from '@dfl/mui-react-common';
import LogisticDetailBasicUpdateContainer from '../../containers/LogisticDetailBasicUpdateContainer';

const LogisticGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, logistic } = useLogisticsDetailContext();

  if (isOpen) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <LogisticDetailBasicUpdateContainer
          initValue={{
            _id: logistic?._id,
            name: logistic?.name,
            handlingCost: logistic?.handlingCost,
            code: logistic?.code,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
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
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.handlingCost',
      value: <CurrencyValue value={Number(data?.handlingCost).toFixed(2)} />,
    },
    {
      label: 'fields.code',
      value: data?.code,
    },
  ];
  return array;
};
