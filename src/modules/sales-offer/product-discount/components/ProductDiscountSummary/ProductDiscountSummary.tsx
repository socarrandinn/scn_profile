import { FlexBox } from '@dfl/mui-react-common';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Box from '@mui/material/Box';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ProductDiscountSummaryProps = {
  total: number;
};

const ProductDiscountSummary = ({ total }: ProductDiscountSummaryProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <Box mb={2}>
      <FlexBox gap={2} flexWrap={'wrap'}>
        {!!total && (
          <CounterBox
            title={t('fields.count')}
            value={total}
            sx={{ width: '100%' }}
            small
            variant={'contented'}
            color={'primary'}
            icon={ListAltOutlinedIcon}
          />
        )}
      </FlexBox>
    </Box>
  );
};

export default memo(ProductDiscountSummary);
