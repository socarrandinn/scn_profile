import { memo } from 'react'
import { IconButton } from '@dfl/mui-react-common';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';

type CategoryOrderProps = {
  rowId: string
}

const CategoryOrder = ({ rowId }: CategoryOrderProps) => {
  return (
        <Stack direction='row' spacing={1}>
            <IconButton aria-label="delete" tooltip={'up'} size={'small'}>
                <ExpandLessIcon/>
            </IconButton>
            <IconButton aria-label="delete" tooltip={'down'}>
                <ExpandMoreIcon/>
            </IconButton>
        </Stack>
  );
}

export default memo(CategoryOrder);
