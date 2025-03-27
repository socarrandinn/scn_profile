
import { memo } from 'react';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IIncidenceComment } from '../../interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type IncidenceCommentItemProps = {
  data: IIncidenceComment;
};

const IncidenceCommentItem = ({ data }: IncidenceCommentItemProps) => {
  return (
    <FlexBox gap={1}>
      <AvatarMedia avatar={data?.createdBy?.avatar} sx={{ height: '30px', width: '30px' }} />
      <FlexBox flexDirection='column' gap={0.5} width='100%'>
        <FlexBox height='30px' alignItems={'center'} gap={1} width='100%'>
          <Typography fontWeight='700'>{data?.createdBy?.fullName?.split(' ').slice(0, 3).join(' ')}</Typography>
          <Typography color='gray' variant='caption'>
            <DateValue value={data?.createdAt} format='PPpp' />
          </Typography>
          {data?.file?.length !== 0 && (
            <a href={data?.file?.[0]?.url} download className='text-inherit'>
              <CloudDownloadIcon className='mr-2 animate-bounce' />
            </a>
          )}
        </FlexBox>
        <FlexBox>
          <Typography variant='body2' color='gray'>
            {data?.message}
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default memo(IncidenceCommentItem);
