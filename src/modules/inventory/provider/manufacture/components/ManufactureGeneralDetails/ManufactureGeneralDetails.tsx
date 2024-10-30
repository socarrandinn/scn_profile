import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { IManufacture } from '../../interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ManufactureBand } from '../ManufactureBand';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ManufactureEditBasicInfoContainer from '../../containers/ManufactureEditBasicInfoContainer';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ManufactureGeneralDetails = () => {
  const { t } = useTranslation('manufacture');
  const { isLoading, error, manufacture, onOneToggle, onOneClose, state } = useManufactureDetailContext();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper nm title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <ManufactureEditBasicInfoContainer initValue={manufacture as IManufacture} onClose={handleClose} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        isLoading={isLoading}
        error={error}
        columns={simpleColumns}
        data={getArray(manufacture as IManufacture)}
      />
    </FormPaper>
  );
};

export default memo(ManufactureGeneralDetails);

const getArray = (data: IManufacture): any[] => {
  const array = [
    {
      label: 'manufacture:fields.name',
      value: data?.name,
    },
    {
      label: 'manufacture:fields.band',
      value: <ManufactureBand bands={data?.brand || []} />,
    },
  ];
  return array;
};
