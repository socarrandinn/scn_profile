import { memo } from 'react';
import { IIncidence } from '../../interfaces';
import { Card, CardContent, Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import { Info, InfoOutlined, MoreVert } from '@mui/icons-material';

const IncidenceCard = ({ data }: { data: IIncidence }) => {
  const { t } = useTranslation('order');

  return (
    <Card sx={{ borderRadius: '10px' }}>
      <FlexBox sx={{ background: '#F94A44', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px 10px 16px' }}>
        <div className='flex items-center gap-2 text-white'>
          <InfoOutlined />
          <Typography>{t('orderIncidence')}</Typography>
        </div>
        <MoreVert sx={{ color: 'white' }} />
      </FlexBox>
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default memo(IncidenceCard);
