import { ChatRounded } from '@mui/icons-material';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import CHART_IMAGES from 'assets/images/charts';
import { useTranslation } from 'react-i18next';
import GraphBackground from './GraphBackground';

type Props = {
  variant: 'histogram' | 'pie' | 'bar' | 'donut' | 'histogram-bar';
  isLoading?: boolean;
};

const IMAGES = {
  histogram: CHART_IMAGES.histogram,
  pie: CHART_IMAGES.pie,
  bar: CHART_IMAGES.bar,
  donut: CHART_IMAGES.donut,
  'histogram-bar': CHART_IMAGES.histogramBar,
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
        gap: 1,
        borderRadius: 2,
        backgroundColor: 'background.default',
        p: 2,
        position: 'relative',
      }}
    >
      <GraphBackground />
      {isLoading ? (
        <Skeleton variant='rounded' width={260} height={160} sx={{ borderRadius: 4 }} />
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
        <Skeleton variant='text' width={150} />
      ) : (
        <Typography variant='h2' align='center'>
          {t('chart.notData')}
        </Typography>
      )}
    </Stack>
  );
};

export default EmptyChart;
