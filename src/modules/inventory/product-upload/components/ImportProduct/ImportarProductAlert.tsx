import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IconButton, Stack, styled, Tooltip } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { isEmpty } from 'lodash';
import { CounterBox } from 'components/libs/analytic/CounterBox';

type ProductImportInfoProps = {
  response: any;
  lastError: number;
  toggleSeeError: any;
  seeError: boolean;
  productsWithoutNameTotal: number;
  productsWithoutProvidersTotal: number;
  categoriesNoExistTotal: number;
};

const SeeTooltip = styled(Tooltip)(() => ({
  position: 'absolute',
  top: 5,
  right: 5,
  color: 'white',
}));

const ProductImportInfo = ({ response, seeError, toggleSeeError }: ProductImportInfoProps) => {
  const { t } = useTranslation('productUpload');

  return (
    <Stack gap={2} sx={{ top: '20px', position: 'relative' }}>
      <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'} sx={{ pb: 2 }}>
        <CounterBox
          title={t('importProduct.totalProduct')}
          value={response?.total || 0}
          flexGrow={1}
          color='primary'
          variant='outlined'
          icon={DoneAllOutlinedIcon}
        />

        {/*  <CounterBox
          title={t('importProduct.totalCategory')}
          value={response?.totalCategories || 0}
          sx={{
            position: 'relative',
          }}
          flexGrow={1}
          color='primary'
          variant='contented'
          icon={DoneAllOutlinedIcon}
        /> */}

        <CounterBox
          title={t('importProduct.totalError')}
          value={response?.error || 0}
          sx={{ position: 'relative' }}
          flexGrow={1}
          color='error'
          variant='contented'
          icon={ErrorOutlineOutlinedIcon}
        >
          {!isEmpty(response) ? <ViewProduct see={seeError} onView={toggleSeeError} /> : <></>}
        </CounterBox>

        {/* <CounterGroupCard
          small
          loading={false}
          flexGrow={1}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
            flexWrap: 'nowrap',
          }}
          color='error'
          variant='contented'
          values={[
            { title: t('importProduct.productsWithoutCategory'), value: lastError, icon: BorderColorIcon },
            { title: t('importProduct.productsWithoutName'), value: productsWithoutNameTotal, icon: TaskOutlinedIcon },
            {
              title: t('importProduct.productsWithoutProvider'),
              value: productsWithoutProvidersTotal,
              icon: Person2Icon,
            },
            {
              title: t('importProduct.nonExistingCategory'),
              value: categoriesNoExistTotal,
              icon: CategoryIcon,
            },
          ]}
        /> */}
      </FlexBox>
    </Stack>
  );
};

export default memo(ProductImportInfo);

type ViewProductProps = {
  onView: () => void;
  see: boolean;
};
const ViewProduct = ({ onView, see }: ViewProductProps) => {
  const { t } = useTranslation('product');
  return (
    <SeeTooltip title={t('product:seeList')}>
      <IconButton onClick={onView} color='default'>
        {see ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
      </IconButton>
    </SeeTooltip>
  );
};
