import { FlexBox } from '@dfl/mui-react-common';
import { map } from 'lodash';
import { memo } from 'react';
import IncidenceCommentItem from './IncidenceCommentItem';
import { IIncidenceComment } from '../../interfaces';

type IncidenceCommentsListProps = {
  comments: IIncidenceComment[];
  limit?: number;
};

const IncidenceCommentsList = ({ comments, limit = Infinity }: IncidenceCommentsListProps) => {
  const limitedComments = limit < comments.length ? comments?.slice(0, limit) : comments;

  return (
    <FlexBox flexDirection='column' gap={3} my={2}>
      {comments?.map((comment) => (
        <IncidenceCommentItem key={comment?._id} data={comment} />
      ))}
    </FlexBox>
  );
};

export default memo(IncidenceCommentsList);
