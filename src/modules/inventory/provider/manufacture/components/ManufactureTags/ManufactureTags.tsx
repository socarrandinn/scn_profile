import { useMemo, memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableRow, Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';
import ManufactureTagsUpdateContainer from '../../containers/ManufactureTagsUpdateContainer';
import { KeywordsDisplay } from 'modules/inventory/common/components/KeywordsDisplay';
import ProvidersFormPaperActions from 'modules/inventory/product/components/ProductGeneralProviders/ProvidersFormPaperActions';

type ProductInfoRowProps = {
  label: string;
  value: any;
};

const ProductInfoRow = ({ label, value }: ProductInfoRowProps) => (
  <Table>
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell> {value}</TableCell>
    </TableRow>
  </Table>
);

const ManufactureTags = () => {
  const { t } = useTranslation('supplier');
  const { isLoading, error, manufacture, onOneToggle, onOneClose, state } = useManufactureDetailContext();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneToggle]);

  const productArray = useMemo(
    () => [
      {
        label: 'section.tags.title',
        value: <KeywordsDisplay words={manufacture?.keywords || []} />,
      },
    ],
    [manufacture],
  );

  if (open) {
    return (
      <FormPaper
        nm
        actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={handleToggle} open={open} />}
      >
        <ManufactureTagsUpdateContainer
          initValue={{
            _id: manufacture?._id,
            // @ts-ignore
            keywords: manufacture?.keywords,
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
      nm
      actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={handleToggle} open={open} />}
    >
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading &&
        !error &&
        productArray.map((item, index) => <ProductInfoRow key={index} label={t(item.label)} value={item.value} />)}
    </FormPaper>
  );
};

export default memo(ManufactureTags);
