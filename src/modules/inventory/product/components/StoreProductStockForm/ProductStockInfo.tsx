import { memo, useState } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip, styled, Stack } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ProductSuccessStockList from './ProductSuccessStockList';
import ProductOtherStoreStockList from './ProductOtherStoreStockList';
import { IFileErrorProductStock, LIST_ERROR_TYPE } from '../../interfaces/IStock';
import { CounterBox } from 'components/libs/analytic/CounterBox';

type ProductStockInfoProps = {
  response: IFileErrorProductStock | undefined;
};

const SeeTooltip = styled(Tooltip)(() => ({
  position: 'absolute',
  top: 5,
  right: 5,
  color: 'white',
}));

const ProductStockInfo = ({ response }: ProductStockInfoProps) => {
  const { t } = useTranslation('product');
  const [seeCode, setSeeCode] = useState(false);
  const [seeOtherError, setSeeOtherError] = useState(false);
  const [seeLocationError, setSeeLocationError] = useState(false);

  if (!response) return <></>;

  const total = (response?.listError?.length || 0) + (response?.items?.length || 0);
  const otherError = response?.listError?.filter((error) => error?.reference === LIST_ERROR_TYPE?.OTHER_ERROR);
  const locationError = response?.listError?.filter((error) => error?.reference === LIST_ERROR_TYPE?.LOCATION_ERROR);

  return (
    <Stack gap={2}>
      <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
        <CounterBox
          title={t('warehouseStockModal.totalProduct')}
          value={total}
          flexGrow={1}
          color='primary'
          variant='outlined'
          icon={DoneAllOutlinedIcon}
        />

        <CounterBox
          title={t('warehouseStockModal.productSuccess')}
          value={response?.items?.length || 0}
          sx={{
            position: 'relative',
          }}
          flexGrow={1}
          color='primary'
          variant='contented'
          icon={DoneAllOutlinedIcon}
        >
          {response?.items?.length ? <ViewProduct see={seeCode} onView={setSeeCode} /> : undefined}
        </CounterBox>

        <CounterBox
          title={t('warehouseStockModal.productOtherError')}
          value={otherError?.length || 0}
          sx={{ position: 'relative' }}
          flexGrow={1}
          color='error'
          variant='contented'
          icon={ErrorOutlineOutlinedIcon}
        >
          {otherError?.length ? <ViewProduct see={seeOtherError} onView={setSeeOtherError} /> : undefined}
        </CounterBox>

        <CounterBox
          title={t('warehouseStockModal.productLocationError')}
          value={locationError?.length || 0}
          sx={{ position: 'relative' }}
          flexGrow={1}
          color='error'
          variant='contented'
          icon={ErrorOutlineOutlinedIcon}
        >
          {locationError?.length ? <ViewProduct see={seeLocationError} onView={setSeeLocationError} /> : undefined}
        </CounterBox>
      </FlexBox>
      <Stack>
        {seeCode ? <ProductSuccessStockList items={response?.items || []} /> : undefined}
        {seeOtherError ? (
          <ProductOtherStoreStockList title={t('warehouseStockModal.productOtherError')} listErrors={otherError || []} />
        ) : undefined}
        {seeLocationError ? (
          <ProductOtherStoreStockList
            title={t('warehouseStockModal.productLocationError')}
            listErrors={locationError || []}
          />
        ) : undefined}
      </Stack>
    </Stack>
  );
};

export default memo(ProductStockInfo);

type ViewProductProps = {
  see: boolean;
  onView: (see: boolean) => void;
};

const ViewProduct = ({ see, onView }: ViewProductProps) => {
  const { t } = useTranslation('prodcut');
  return (
    <SeeTooltip title={t('product:seeList')}>
      <IconButton
        onClick={() => {
          onView(!see);
        }}
        color='default'
      >
        {see ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
      </IconButton>
    </SeeTooltip>
  );
};
