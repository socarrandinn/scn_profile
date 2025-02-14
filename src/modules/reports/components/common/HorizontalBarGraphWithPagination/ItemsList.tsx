import { memo, useMemo } from 'react';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LinearProgressWithLabelLogisticsHome from './LinearProgressWithLabel';

type ListStaticLogisticsHomeProps = {
  data: any[];
  isLoadingTable?: boolean;
  isSlice?: boolean;
  onSelectItem?: any;
  limit?: number;
  isParent?: (a: any) => boolean;
  MIN: number;
  MAX: number;
  isPrice?: boolean;
  color?: 'inherit' | 'info' | 'primary' | 'secondary' | 'error' | 'success' | 'warning';
};

const HeaderList = () => {
  const { t } = useTranslation('common');
  return (
    <FlexBox justifyContent={'space-between'}>
      <Typography />
      <Typography>{t('horizontalBar.count')}</Typography>
    </FlexBox>
  );
};

const ItemsListWrapper = ({
  active,
  children,
  onSelectItem,
}: ChildrenProps & { active: boolean; onSelectItem?: any }) => {
  if (active) {
    return (
      <ListItem sx={{ width: '100%' }} onClick={onSelectItem} className='cursor-pointer'>
        {children}
      </ListItem>
    );
  }

  return <ListItem sx={{ width: '100%' }}>{children}</ListItem>;
};

const ItemsList = ({
  data,
  isSlice = true,
  MIN,
  MAX,
  isPrice,
  limit = 7,
  onSelectItem,
  isParent,
  color,
}: ListStaticLogisticsHomeProps) => {
  const finalData = useMemo(() => (isSlice ? data.slice(0, limit) : data), [isSlice, data, limit]);
  const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
        subheader={<HeaderList />}
      >
        {finalData.map((a: any, index) => (
          <ItemsListWrapper key={index} active={isParent?.(a) || false} onSelectItem={() => onSelectItem?.(a)}>
            <LinearProgressWithLabelLogisticsHome
              isPrice={isPrice}
              countOrder={a.count}
              titleName={a.name}
              valueBar={normalize(a.count)}
              color={color}
            />
          </ItemsListWrapper>
        ))}
      </List>
    </>
  );
};

export default memo(ItemsList);
