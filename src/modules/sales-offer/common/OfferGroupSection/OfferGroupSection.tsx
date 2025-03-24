import {
  Typography,
  Card,
  Divider,
  CardHeader,
  Grow,
  Collapse,
  styled,
  IconButtonProps,
  IconButton,
  Stack,
  Chip,
} from '@mui/material';

import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChildrenProps } from '@dfl/mui-react-common';

type Props = {
  title: string;
  someChild?: boolean;
  chip: {
    label: string;
  };
};

const OfferGroupSection = ({ title, someChild = false, children, chip }: Props & ChildrenProps) => {
  const [expanded, setExpanded] = useState(someChild);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grow in mountOnEnter unmountOnExit>
      <Card sx={{ mb: 2 }}>
        <CardHeader
          onClick={handleExpandClick}
          sx={{ ':hover': { cursor: 'pointer' }, mb: 0, padding: '8px 16px' }}
          title={
            <Stack sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <Typography lineHeight={1} fontSize={20} fontWeight='bold'>
                {title}
              </Typography>

              <Stack flexDirection={'row'} gap={2} alignItems={'center'}>
                <Chip color='primary' size='small' sx={{ borderRadius: 4 }} label={chip.label} />
                <ExpandMore
                  sx={{
                    backgroundColor: 'background.default',
                  }}
                  size='small'
                  expand={expanded}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Stack>
            </Stack>
          }
        />
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Stack divider={<Divider orientation='horizontal' flexItem />}>{children}</Stack>
        </Collapse>
      </Card>
    </Grow>
  );
};

export default OfferGroupSection;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
