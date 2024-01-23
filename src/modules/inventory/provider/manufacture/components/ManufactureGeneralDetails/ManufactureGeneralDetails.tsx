import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { IManufacture } from '../../interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ManufactureBand } from '../ManufactureBand';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useToggle } from '@dfl/hook-utils';
import { ManufactureForm } from '../ManufactureForm';
import ManufactureEditBasicInfoContainer from '../../containers/ManufactureEditBasicInfoContainer';
import { IImageMedia } from 'modules/common/interfaces';

const ManufactureGeneralDetails = () => {
  const { t } = useTranslation('manufacture');
  const { isLoading, error, manufacture } = ManufactureDetail();
  const { isOpen, onOpen, onClose } = useToggle(false);

  const handleToggle = () => {
    isOpen ? onClose() : onOpen();
  };

  if (isOpen) {
    return (
      <FormPaper title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={isOpen} />}>
        <ManufactureEditBasicInfoContainer
          initValue={{
            _id: manufacture?._id || '',
            name: manufacture?.name || '',
            brand: manufacture?.brand || [],
            state: manufacture?.state || false,
            avatar: manufacture?.avatar as IImageMedia,
          }}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={isOpen} />}>
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
