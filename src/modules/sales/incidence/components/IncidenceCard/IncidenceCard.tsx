import { memo } from 'react';
import { IIncidence } from '../../interfaces';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FlexBox, IconButton, LongText } from '@dfl/mui-react-common';
import { InfoOutlined, MoreVert, NoFood, Person } from '@mui/icons-material';
import { ReactLink } from '@dfl/react-security';
import { format, } from 'date-fns';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { InfoIcon } from 'components/icons/InfoIcon';
import { AvatarMedia } from 'components/AvatarMedia';

const IncidenceCard = ({ data }: { data: IIncidence }) => {
  const { t } = useTranslation('order');

  return (
    <Card>
      <FlexBox sx={{ background: '#F94A44', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 4px 16px' }}>
        <div className='flex items-center gap-2 text-white'>
          <InfoOutlined />
          <Typography>{t('orderIncidence')}</Typography>
        </div>
        <IconButton tooltip={t('common:showMore')}>
          <MoreVert sx={{ color: 'white' }} />
        </IconButton>
      </FlexBox>
      <CardContent sx={{ padding: '12px 20px' }}>
        <Typography variant='h2'>{data?.name}</Typography>
        <FlexBox sx={{ mt: 0.5, mb: 1 }} alignItems={'center'} gap={2}>
          <ReactLink to={`/sales/orders/${data?._id as string}/general`} color={'#F94A44'} fontWeight={500}>
            {data?.code || 'INC15236236'}
          </ReactLink>
          <Typography>{format(new Date(data?.createdAt || ''), 'MM/dd/yyyy hh:mm a')}</Typography>
        </FlexBox>

        <FlexBox alignItems={'center'} justifyContent={'space-between'}>
          <IncidenceStatusPicker value={data?.status} rowId={data?._id as string} readOnly />
          <FlexBox alignItems={'center'}>
            <IconButton tooltip={t('common:comments')}>

            </IconButton>
            <IconButton tooltip={t('common:activity')} disabled>

            </IconButton>
          </FlexBox>
        </FlexBox>

        <FlexBox sx={{ background: '#EDEEF0', my: 2, p: '10px', position: 'relative', borderRadius: '10px' }} gap={1}>
          <InfoOutlined color='error' />
          <div className='max-w-[82%]'>
            <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>{data?.cause?.name}</Typography>
            {data?.subCause?.name &&
              <Typography sx={{ fontSize: '15px' }}>({t('incidence:fields.subCause')}) {data?.subCause?.name}</Typography>
            }
          </div>
          <InfoIcon sx={{ position: 'absolute', bottom: '-4px', right: 0, width: 50, height: 50 }} fill={'#F94A44'} />
        </FlexBox>

        {!data?.responsible?.fullName &&
          <FlexBox justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant={'h4'}>{t('incidence:fields.assignedTo')}</Typography>
            <Stack flexDirection={'row'} alignItems={'center'} gap={1} sx={{ background: '#E9EBEF', borderRadius: '16px', pr: 2 }}>
              <AvatarMedia name={data?.responsible?.fullName} avatar={data?.responsible?.avatar} sx={{ width: 32, height: 32, }}>
                <Person />
              </AvatarMedia>
              <LongText lineClamp={1} text={data?.responsible?.fullName || 'Erick Fernandez'} />
            </Stack>
          </FlexBox>
        }
      </CardContent>
    </Card>
  );
};

export default memo(IncidenceCard);
