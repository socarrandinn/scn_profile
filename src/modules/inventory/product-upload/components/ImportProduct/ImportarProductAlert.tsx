import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IconButton, Stack, styled, Tooltip } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { isEmpty } from 'lodash';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Person2Icon from '@mui/icons-material/Person2';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import CounterGroupCard from 'modules/dashboard/components/CounterGroupCard/CounterGroupCard';

type ProductImportInfoProps = {
  response: any;
  lastError: number;
  setSeeError: any;
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

const ProductImportInfo = ({
  response,
  lastError,
  seeError,
  setSeeError,
  productsWithoutNameTotal,
  productsWithoutProvidersTotal,
  categoriesNoExistTotal,
}: ProductImportInfoProps) => {
  const { t } = useTranslation('productUpload');

  return (
    <Stack gap={2} sx={{ top: '20px', position: 'relative' }}>
      <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
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
          {!isEmpty(response) ? <ViewProduct see={seeError} onView={setSeeError} /> : <></>}
        </CounterBox>

        <CounterGroupCard
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
        />
      </FlexBox>
    </Stack>
  );
};

export default memo(ProductImportInfo);

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
