import { memo, useMemo } from 'react';
import { DateValue } from '@dfl/mui-react-common';
import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  IconButtonProps,
  Paper,
  Skeleton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useDispatchDetail } from '../../contexts/dispatchContext';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { useToggle } from '@dfl/hook-utils';
import DispatchDetailReportContainer from 'modules/reports/containers/sales/DispatchDetailReportContainer';
import { DispatchIcon } from 'modules/sales/common/components/icons/DispatchIcon';

const DispatchHeader = () => {
  const { isOpen, onToggle } = useToggle(false);
  const { isLoading, dispatch } = useDispatchDetail();

  const skeleton = (
    <Box>
      <Skeleton variant='text' height={24} width={250} />
      <Skeleton variant='text' width={50} />
    </Box>
  );
  const content = useMemo(
    () => (
      <Stack gap={1} flexDirection={'row'}>
        <Avatar variant='rounded' sx={{ height: 50, width: 50, backgroundColor: 'background.default' }}>
          <DispatchIcon color='primary' />
        </Avatar>
        <Box>
          <Typography variant='h1'>{dispatch?.name}</Typography>
          <DateValue value={dispatch?.createdAt} />
        </Box>
      </Stack>
    ),
    [dispatch?.createdAt, dispatch?.name],
  );

  return (
    <Stack>
      <Paper
        sx={{
          p: 2,
          mt: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {isLoading ? skeleton : content}

        <ExpandMore
          expand={isOpen}
          onClick={onToggle}
          sx={{
            backgroundColor: 'primary.main',
            color: (theme) => theme.palette.common.white,
            ':hover': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <ArrowForwardIosOutlined />
        </ExpandMore>
      </Paper>

      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <DispatchDetailReportContainer />
      </Collapse>
    </Stack>
  );
};

export default memo(DispatchHeader);

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }: any) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }: any) => !!expand,
      style: {
        transform: 'rotate(90deg)',
      },
    },
  ],
}));
