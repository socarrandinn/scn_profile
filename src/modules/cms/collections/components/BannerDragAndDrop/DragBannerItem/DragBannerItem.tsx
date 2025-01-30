import { DateValue, imageUrl, LongText } from '@dfl/mui-react-common';
import { Card, Stack } from '@mui/material';
import { IBanner } from 'modules/cms/banners/interfaces';
import DragBannerAction from './DragBannerAction';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { UniqueIdentifier } from '@dnd-kit/core';

type Props = {
  banner: IBanner;
  height: number;
  id: UniqueIdentifier;
};

const DragBannerItem = ({ banner, height, id }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      style={style}
      ref={setNodeRef}
      sx={{
        borderRadius: '10px',
        height: height ?? 75,
        overflow: 'hidden',
        position: 'relative',
        background: `url('${imageUrl(banner?.desktopImage?.thumb ?? '')}')`,
        backgroundColor: 'background.default',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '0 8px ',
        zIndex: 1,
        scale: isDragging ? 1.2 : 1,
        ':before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: isDragging ? '#19320080' : '#19320020',
        },
      }}
    >
      <Stack sx={{ width: 200, height: '100%', justifyContent: 'end', zIndex: 2 }}>
        <LongText color={'white'} lineClamp={1} text={banner?.title} />
        <Stack
          sx={{
            color: 'white',
          }}
          gap={1}
          flexDirection={'row'}
          divider={<>-</>}
        >
          <DateValue value={banner?.startDate} format='dd/MM' />
          <DateValue value={banner?.endDate} format='dd/MM/yyyy' />
        </Stack>
      </Stack>

      {/* actions */}
      <DragBannerAction rowId={banner?._id as string} isDragging={isDragging} {...attributes} listeners={listeners} />
    </Card>
  );
};

export default DragBannerItem;
