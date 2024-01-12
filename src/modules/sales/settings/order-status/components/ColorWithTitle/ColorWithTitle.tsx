import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox } from '@dfl/mui-react-common';
import { Box } from '@mui/material';

interface IColorWithTitle {
  color: string;
  id: string;
  title: string;
  data: any;
}

const ColorWithTitle = ({ color, id, title, data }: IColorWithTitle) => {
  return (
    <FlexBox flexDirection='row' alignItems='center'>
      <Box
        sx={{
          width: '1.3rem',
          height: '1.3rem',
          minWidth: '1.3rem',
          minHeight: '1.3rem',
          borderRadius: '50%',
          backgroundColor: color,
          marginRight: '1rem',
        }}
      />
      <EditLink entityId={id}>{title}</EditLink>
    </FlexBox>
  );
};

export default ColorWithTitle;
