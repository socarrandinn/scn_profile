import { memo } from 'react';
import { Content, Section } from './styled';
import Typography from '@mui/material/Typography';
import { ChildrenProps } from '@dfl/mui-react-common';
import HeaderDecorator from './HeaderDecorator';
import { IReviews } from '../../interfaces';
import { Box } from '@mui/material';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';
import { CompareOutlined } from '@mui/icons-material';

type HeaderSummaryProps = ChildrenProps & {
  review: IReviews;
  entityStyle?: { ICON: any; COLOR: string };
};

const HeaderSummary = ({ review, entityStyle }: HeaderSummaryProps) => {
  return (
    <Section>
      {' '}
      <Box position={'relative'}>
        <AvatarEditable
          readOnly={true}
          onSubmit={() => 'void'}
          // isLoading={isLoadingImage}
          avatar={review?.user?.avatar}
          variant='rounded'
        >
          <CompareOutlined />
        </AvatarEditable>
      </Box>
      <Content>
        <Box>
          <Typography variant='h1'>{review?.title}</Typography>
        </Box>
      </Content>
      {!!entityStyle && <HeaderDecorator color={entityStyle.COLOR} icon={entityStyle.ICON} />}
    </Section>
  );
};

export default memo(HeaderSummary);
