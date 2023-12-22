import { Box, styled } from '@mui/material';
import { ApexOptions } from 'apexcharts';

export const ChartResponsive = styled(Box)(({ theme }) => ({
  height: 450,
  [theme.breakpoints.down('md')]: {
    height: 500,
  },
}));

export const APEX_CHARTS_OPTIONS: ApexOptions = {
  colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#E91E63'],
};

export const DATA_LABELS: ApexOptions = {
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    style: {
      fontWeight: 600,
      colors: ['#FFFfff'],
      fontSize: '14',
    },
    background: {
      enabled: true,
      foreColor: '#000',
      borderRadius: 4,
      padding: 6,
      borderWidth: 1,
      borderColor: '#000',
      dropShadow: {
        enabled: true,
        opacity: 0.4,
        blur: 1,
      },
    },
  },
};

export const getMapperData = (data: any) => {
  if (data?.length === 0 || (data?.length === 1 && Object.keys(data?.[0])?.length === 0)) {
    return [];
  } else {
    return data;
  }
};
