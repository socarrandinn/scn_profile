
import { memo } from 'react';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { Box, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IIncidenceComment } from '../../interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type IncidenceCommentItemProps = {
  data: IIncidenceComment;
};

const IncidenceCommentItem = ({ data }: IncidenceCommentItemProps) => {
  return (
    <FlexBox gap={'9px'}>
      <AvatarMedia avatar={data?.createdBy?.avatar} sx={{ height: '30px', width: '30px' }} />
      <div className='w-full'>
        <FlexBox alignItems={'center'} gap={1} sx={{ mb: '5px' }}>
          <Typography variant='h4' fontWeight={600}>{data?.createdBy?.fullName}</Typography>
          <DateValue value={data?.createdAt} format='h:mm aa' />
          {data?.attachments?.length !== 0 && (
            <a href={data?.attachments?.[0]?.url} download className='text-inherit'>
              <CloudDownloadIcon className='mr-2 animate-bounce' />
            </a>
          )}
        </FlexBox>
        <Box sx={{ background: '#F2F4F8', borderRadius: '5px' }}>
          <Typography variant='body2' color='#2B3445' sx={{ p: '10px' }}>
            {data?.comment}
          </Typography>
        </Box>
      </div>
    </FlexBox>
  );
};

export default memo(IncidenceCommentItem);
