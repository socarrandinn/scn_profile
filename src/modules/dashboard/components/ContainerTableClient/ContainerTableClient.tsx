import { BasicTable } from '@dfl/mui-admin-layout';
import { ConditionContainer } from '@dfl/mui-react-common';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { Grid } from '@mui/material';
import { PaperChart } from 'components/PaperChart';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { clientTableColumns } from 'modules/dashboard/constant/client-table.columns';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ContainerTableClientProps = {
  data: Client[];
};
type Client = {
  firstName: string;
  email: string;
  createdAt: string;
};
const ContainerTableClient = ({ data }: ContainerTableClientProps) => {
  const { t } = useTranslation('report');
  return (
    <Grid container rowSpacing={2} columnSpacing={2} marginTop={3} marginBottom={3}>
      <Grid item xs={12}>
        <PaperChart>
          <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
            <BasicTable columns={clientTableColumns} data={data} isLoading={false} />
          </ConditionContainer>
        </PaperChart>
      </Grid>
    </Grid>
  );
};

export default memo(ContainerTableClient);
