import { FlexBox } from '@dfl/mui-react-common';
import { memo } from 'react';
import IncidenceCommentItem from './IncidenceCommentItem';
import { IIncidenceComment } from '../../interfaces';

type IncidenceCommentsListProps = {
  comments: IIncidenceComment[];
};

const IncidenceCommentsList = ({ comments }: IncidenceCommentsListProps) => {
  return (
    <FlexBox flexDirection='column' gap={1}>
      {comments?.map((comment) => (
        <IncidenceCommentItem key={comment?._id} data={comment} />
      ))}
    </FlexBox>
  );
};

export default memo(IncidenceCommentsList);
