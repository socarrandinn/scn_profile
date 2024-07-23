import { memo } from 'react';
import useUsersMetricService from '../hooks/useUsersMetricService';
import SummaryReportClient from '../components/SummaryReportClient/SummaryReportClient';
import ChartContainerClient from '../components/CardContainer/ChartContainerClient';
import ContainerTableClient from '../components/ContainerTableClient/ContainerTableClient';
import { Stack } from '@mui/material';

const ClientReportContainer = () => {
  const { data } = useUsersMetricService();
  return (
    <Stack gap={{ xs: 1, md: 3 }} mb={3}>
      <SummaryReportClient summary={data?.summary[0]} />
      <ChartContainerClient histogram={data?.Histogram} />
      <ContainerTableClient data={data?.['Last 10 Users']} />
    </Stack>
  );
};

export default memo(ClientReportContainer);
