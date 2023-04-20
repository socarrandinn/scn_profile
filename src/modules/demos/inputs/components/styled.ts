import { styled, Box } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

export const Container = styled(FlexBox)`
  flex-direction: column;
  min-width: 60%;
  max-width: 900px;
  align-items: stretch;
`;

export const SampleCodeContainer = styled(Box)`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid lightgray;
`;
