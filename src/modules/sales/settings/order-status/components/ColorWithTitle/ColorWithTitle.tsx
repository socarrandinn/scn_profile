import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox } from '@dfl/mui-react-common';
import { Box, Chip } from '@mui/material';
import { IOrderStatus } from '../../interfaces';
import { useTranslation } from 'react-i18next';

interface IColorWithTitle {
  value: string;
  record: IOrderStatus;
  rowId: string;
}

const ColorWithTitle = ({ record, rowId, value }: IColorWithTitle) => {
  const { t } = useTranslation('orderStatus');
  return (
    <FlexBox flexDirection='row' alignItems='center' gap={1}>
      <Box
        sx={{
          width: '1.3rem',
          height: '1.3rem',
          minWidth: '1.3rem',
          minHeight: '1.3rem',
          borderRadius: '50%',
          backgroundColor: record.color,
        }}
      />
      <EditLink entityId={rowId}>{value}</EditLink>
      {record?.validationType && (
        <Chip
          sx={{ borderColor: record.color, borderRadius: 0.5 }}
          size='small'
          variant='outlined'
          label={t(`validationType.${record.validationType as string}`)}
        />
      )}
    </FlexBox>
  );
};

export default ColorWithTitle;
