import { memo } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

type ChartCardProps = {
  title: string;
  children: any;
  action?: any;
};

const ChartCard = ({ title, children, action }: ChartCardProps) => {
  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: 'subtitle1',
          sx: { fontWeight: 700 },
        }}
        action={action || undefined}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0, height: 'fit-content' }}>{children}</CardContent>
    </Card>
  );
};

export default memo(ChartCard);
