import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { useTranslation } from 'react-i18next';
import { IResponseStock } from '../../interfaces/IStock';
import { CounterBox } from 'components/libs/analytic/CounterBox';

type ProductResponseStockInfoProps = {
  response: IResponseStock | undefined;
};

const ProductResponseStockInfo = ({ response }: ProductResponseStockInfoProps) => {
  const { t } = useTranslation('product');

  if (!response) return <></>;

  return (
    <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
      <CounterBox
        title={t('storeStockModal.productError')}
        value={response?.error}
        flexGrow={1}
        color='error'
        variant='contented'
        icon={ErrorOutlineOutlinedIcon}
      />

      <CounterBox
        title={t('storeStockModal.productSuccess')}
        value={response?.success}
        flexGrow={1}
        color='primary'
        variant='contented'
        icon={DoneAllOutlinedIcon}
      />
    </FlexBox>
  );
};

export default memo(ProductResponseStockInfo);
