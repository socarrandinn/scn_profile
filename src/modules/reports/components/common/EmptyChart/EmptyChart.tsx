import { ChatRounded } from '@mui/icons-material';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import CHART_IMAGES from 'assets/images/charts';
import { useTranslation } from 'react-i18next';

type Props = {
  variant: 'bar' /*  | 'donut' | 'histogram-bar' | 'histogram' | 'pie'  */;
  isLoading?: boolean;
};

const IMAGES = {
  bar: CHART_IMAGES.emptyBar,
};
const EmptyChart = ({ variant, isLoading }: Props) => {
  const { t } = useTranslation('common');
  const image = IMAGES[variant];
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 2,
        borderRadius: 2,
        p: 2,
        position: 'relative',
      }}
    >
      {isLoading ? (
        <Skeleton variant='rounded' width={200} height={160} sx={{ borderRadius: 4 }} />
      ) : (
        <Avatar
          variant='square'
          src={image}
          sx={{
            width: 'auto',
            height: 160,
            backgroundColor: 'transparent',
            '& .MuiAvatar-img': {
              objectFit: 'contain',
              objectPosition: 'center',
            },
          }}
        >
          <ChatRounded sx={{ fontSize: 100 }} />
        </Avatar>
      )}

      {isLoading ? (
        <Skeleton variant='text' width={200} />
      ) : (
        <Typography variant='h2' align='center'>
          {t('chart.notData')}
        </Typography>
      )}
    </Stack>
  );
};

export default EmptyChart;
