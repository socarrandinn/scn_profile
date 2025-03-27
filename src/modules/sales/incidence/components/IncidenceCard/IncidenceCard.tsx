import { memo, useCallback } from 'react';
import { IIncidence } from '../../interfaces';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FlexBox, IconButton } from '@dfl/mui-react-common';
import { InfoOutlined, MoreVert } from '@mui/icons-material';
import { ReactLink } from '@dfl/react-security';
import { format, } from 'date-fns';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { InfoIcon } from 'components/icons/InfoIcon';
import ResponsibleCell from 'modules/sales/common/components/ResponsibleCell/ResponsibleCell';
import { useNavigate } from 'react-router';
import { ErrorStyledBadge } from './styled';
import { ReactComponent as CommentsIcon } from 'components/icons/comments.svg';
import { ReactComponent as ActivityIcon } from 'components/icons/actions.svg';

const IncidenceCard = ({ data }: { data: IIncidence }) => {
  const { t } = useTranslation('order');
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/sales/incidences/${data?._id as string}/general`);
  }, [data?._id, navigate]);

  const goToActivity = useCallback(() => {
    navigate(`/sales/incidences/${data?._id as string}/history_change`);
  }, [data?._id, navigate]);

  return (
    <Card>
      <FlexBox sx={{ background: '#F94A44', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 4px 16px' }}>
        <div className='flex items-center gap-2 text-white'>
          <InfoOutlined />
          <Typography>{t('orderIncidence')}</Typography>
        </div>
        <IconButton tooltip={t('common:showMore')} onClick={goToDetails}>
          <MoreVert sx={{ color: 'white' }} />
        </IconButton>
      </FlexBox>
      <CardContent sx={{ padding: '12px 20px' }}>
        <Typography variant='h2'>{data?.cause?.name}</Typography>
        <FlexBox sx={{ mt: 0.5, mb: 1 }} alignItems={'center'} gap={2}>
          <ReactLink to={`/sales/incidences/${data?._id as string}/general`} color={'#F94A44'} fontWeight={500}>
            {data?.code}
          </ReactLink>
          <Typography>{format(new Date(data?.createdAt || ''), 'MM/dd/yyyy h:mm a')}</Typography>
        </FlexBox>

        <FlexBox alignItems={'center'} justifyContent={'space-between'}>
          <IncidenceStatusPicker value={data?.status} rowId={data?._id as string} readOnly />
          <FlexBox alignItems={'center'} gap={2}>
            <ErrorStyledBadge badgeContent={3} color='error'>
              <IconButton tooltip={t('common:comments')} onClick={goToDetails} sx={{ backgroundColor: '#F2F4F8' }}>
                <CommentsIcon />
              </IconButton>
            </ErrorStyledBadge>
            <ErrorStyledBadge badgeContent={5} color='error'>
              <IconButton tooltip={t('breadcrumb:activity')} onClick={goToActivity} sx={{ backgroundColor: '#F2F4F8' }}>
                <ActivityIcon />
              </IconButton>
            </ErrorStyledBadge>
          </FlexBox>
        </FlexBox>

        <FlexBox sx={{ background: '#EDEEF0', my: 2, p: '10px', position: 'relative', borderRadius: '8px' }} gap={1}>
          <InfoOutlined color='error' />
          <div className='max-w-[82%]'>
            {data?.description && <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>{data?.description}</Typography>}
            {data?.subCause?.name &&
              <Typography sx={{ fontSize: '15px' }}>({t('incidence:fields.subCause')}) {data?.subCause?.name}</Typography>
            }
          </div>
          <InfoIcon sx={{ position: 'absolute', bottom: '-4px', right: 0, width: 50, height: 50 }} fill={'#F94A44'} />
        </FlexBox>

        {data?.responsible?.fullName &&
          <ResponsibleCell data={data?.responsible} />
        }
      </CardContent>
    </Card>
  );
};

export default memo(IncidenceCard);
