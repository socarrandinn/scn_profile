import { memo, useState } from 'react';
import { Collapse, Stack } from '@mui/material';
import { ExpandMore } from './styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChildrenProps, LongText } from '@dfl/mui-react-common';

const ProductWithInvalidAreaExpand = ({ children, areaName }: ChildrenProps & { areaName: string }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Stack
        gap={1}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={handleExpandClick}
        sx={{ ':hover': { cursor: 'pointer' } }}
      >
        <LongText lineClamp={1} text={areaName} sx={{ fontWeight: 600 }} />
        <ExpandMore size='small' expand={expanded} aria-expanded={expanded} aria-label='show more'>
          <ExpandMoreIcon fontSize='small' />
        </ExpandMore>
      </Stack>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default memo(ProductWithInvalidAreaExpand);
