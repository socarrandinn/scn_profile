import { useMemo, memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableRow, Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import LogisticTagsUpdateContainer from '../../containers/LogisticTagsUpdateContainer';
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

const LogisticTags = () => {
  const { t } = useTranslation('supplier');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneToggle]);

  const productArray = useMemo(
    () => [
      {
        label: 'section.tags.title',
        value: <KeywordsDisplay words={logistic?.keywords || []} />,
      },
    ],
    [logistic],
  );

  if (open) {
    return (
      <FormPaper
        nm
        actions={<ProvidersFormPaperActions label={t('section.tags.title')} onToggle={handleToggle} open={open} />}
      >
        <LogisticTagsUpdateContainer
          initValue={{
            _id: logistic?._id,
            // @ts-ignore
            keywords: logistic?.keywords,
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

export default memo(LogisticTags);
