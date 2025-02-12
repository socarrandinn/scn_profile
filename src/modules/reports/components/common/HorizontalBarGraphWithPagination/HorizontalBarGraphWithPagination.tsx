import { memo, useMemo } from 'react';
import { ChildrenProps, ConditionContainer, FlexBox } from '@dfl/mui-react-common';

import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { Button, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import get from 'lodash/get';
import { truncate } from 'utils/math';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import ItemsList from './ItemsList';
import ItemsMoreDialog from './ItemsMoreDialog';

export const STitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 900,
  fontFamily: 'Helvetica, Arial, sans-serif',
}));

export type HorizontalBarGraphWithPaginationProps = ChildrenProps & {
  data?: any[];
  isLoading?: boolean;
  valueField?: string;
  labelField?: any;
  title: string | null;
  isParent?: (a: any) => boolean;
  onSelectItem?: any;
  isPrice?: boolean;
  color?: 'inherit' | 'info' | 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  limit?: number;
  notSort?: boolean;
  labelUnit?: string;
};

const HorizontalBarGraphWithPagination = ({
  data = [],
  isLoading,
  title,
  labelField = 'categoryName',
  valueField = 'count',
  isPrice = false,
  onSelectItem,
  children,
  isParent,
  color,
  limit = 0,
  notSort = false,
  labelUnit = 'Cantidad',
}: HorizontalBarGraphWithPaginationProps) => {
  const { t } = useTranslation('common');
  const { onOpen, isOpen, onClose } = useToggle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let minValue = 1e9 + 1;
  let maxValue = 0;

  const finalData: any[] = useMemo(() => {
    if (notSort) {
      return data?.map((a: any) => ({
        ...a,
        name: typeof labelField === 'string' ? get(a, labelField) : labelField?.(a),
        count: truncate(get(a, valueField) || 0) || 0,
      }));
    }
    return data
      ?.map((a: any) => ({
        ...a,
        name: typeof labelField === 'string' ? get(a, labelField) : labelField?.(a),
        count: truncate(get(a, valueField) || 0) || 0,
      }))
      ?.sort((a: any, b: any) => b.count - a.count);
  }, [data, labelField, notSort, valueField]);

  const valueMinMax = useMemo(() => {
    if (notSort) {
      finalData?.forEach((a: any) => {
        if (a.count >= maxValue) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          maxValue = a.count;
        } else if (a.count <= minValue) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          minValue = a.count;
        }
      });
    } else {
      minValue = finalData?.[finalData.length - 1]?.count || maxValue;
      maxValue = finalData?.[0]?.count || minValue;
    }
    return { maxValue, minValue };
  }, [finalData, notSort]);

  return (
    <>
      <ConditionContainer active={!isLoading} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        <FlexBox
          flexDirection={isMobile ? 'column' : 'row'}
          className={!!title || data?.length > limit ? 'mb-4' : ''}
          justifyContent={'space-between'}
          minHeight={'35px'}
        >
          {!!title && <STitle>{title}</STitle>}
          {data?.length > limit && (
            <Button variant='outlined' onClick={onOpen} color={'inherit'} sx={{ width: '102px', height: '38px' }}>
              {t('horizontalBar.seeMore')}
            </Button>
          )}
        </FlexBox>
        {children}
        <ItemsList
          isParent={isParent}
          onSelectItem={onSelectItem}
          limit={limit}
          isLoadingTable={isLoading}
          isPrice={isPrice}
          data={finalData || []}
          MIN={valueMinMax.minValue}
          MAX={valueMinMax.maxValue}
          color={color}
          // horizontalBarCount={labelUnit}
        />
      </ConditionContainer>
      <ItemsMoreDialog
        isLoading={isLoading}
        isPrice={isPrice}
        title={title}
        handleClose={onClose}
        open={isOpen}
        data={finalData || []}
        MIN={valueMinMax.minValue}
        MAX={valueMinMax.maxValue}
        color={color}
      />
    </>
  );
};

export default memo(HorizontalBarGraphWithPagination);
