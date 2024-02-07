import { Grid } from '@mui/material';
import { memo } from 'react';
import ChartInventoryStock from '../CardContainer/ChartInventoryStock';
import ChartInventory from '../CardContainer/ChartInventory';
import { BasicTable } from '@dfl/mui-admin-layout';
import { columnsTable } from 'modules/dashboard/constant/table.columna';
import { data } from 'modules/dashboard/constant/data';
import { ChartCard } from 'components/ChartCard';
import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { useTranslation } from 'react-i18next';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { PaperChart } from 'components/PaperChart';

const ContainerInventory = () => {
  const { t } = useTranslation('report');
  return (
    <Grid container rowSpacing={2} columnSpacing={2} marginTop={3} marginBottom={3}>
      <Grid item md={4} xs={12}>
        <ChartInventoryStock />
      </Grid>
      <Grid item md={8} xs={12}>
        <PaperChart>
          <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
            <BasicTable columns={columnsTable} data={data} isLoading={false} />
          </ConditionContainer>
        </PaperChart>
      </Grid>
    </Grid>
  );
};

export default memo(ContainerInventory);
