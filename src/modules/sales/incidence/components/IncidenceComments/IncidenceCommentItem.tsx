
import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { Box, Typography } from '@mui/material';
import { IIncidenceComment } from '../../interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import { FilePreview } from 'components/FileDropZone/FilePreview';
import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

type IncidenceCommentItemProps = {
  data: IIncidenceComment;
};

const IncidenceCommentItem = ({ data }: IncidenceCommentItemProps) => {
  const time = formatDistanceToNow(new Date(data?.createdAt as string), { addSuffix: true, locale: es });

  return (
    <FlexBox gap={'9px'}>
      <AvatarMedia avatar={data?.createdBy?.avatar} sx={{ height: '30px', width: '30px' }} />
      <div className='w-full'>
        <FlexBox alignItems={'center'} gap={1} sx={{ mb: '2.5px' }}>
          <Typography variant='body1' fontWeight={600}>{data?.createdBy?.fullName}</Typography>
          <Typography>{time}</Typography>
        </FlexBox>
        <Box sx={{ background: '#F2F4F8', borderRadius: '5px', mb: 1 }}>
          <Typography variant='body2' color='#2B3445' sx={{ p: '10px' }}>
            {data?.comment}
          </Typography>
        </Box>
        {data?.attachments && data?.attachments?.map((file: IFile) => <FilePreview key={file?.url} data={file} />)}
      </div>
    </FlexBox>
  );
};

export default memo(IncidenceCommentItem);
