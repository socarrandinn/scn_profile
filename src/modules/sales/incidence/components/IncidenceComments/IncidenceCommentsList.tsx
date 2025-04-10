import { FlexBox } from '@dfl/mui-react-common';
import { memo, useMemo, useState } from 'react';
import IncidenceCommentItem from './IncidenceCommentItem';
import { IIncidenceComment } from '../../interfaces';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material';

type IncidenceCommentsListProps = {
  comments: IIncidenceComment[];
};

const VISIBLE_COUNT = 3;

const IncidenceCommentsList = ({ comments }: IncidenceCommentsListProps) => {
  const { t } = useTranslation('common');
  const [showAll, setShowAll] = useState(false);

  const visibleComments = useMemo(() => {
    return showAll ? comments : comments.slice(0, VISIBLE_COUNT);
  }, [showAll, comments]);

  const handleToggle = () => { setShowAll((prev) => !prev); };
  return (
    <>
      <FlexBox flexDirection="column" gap={1}>
        {visibleComments.map((comment) => (
          <IncidenceCommentItem key={comment._id} data={comment} />
        ))}
      </FlexBox>

      {comments.length > VISIBLE_COUNT && (
        <FlexBox justifyContent='flex-end' mt={1}>
          <Button onClick={handleToggle} size="small" startIcon={showAll ? <KeyboardDoubleArrowUp fontSize='small' />
            : <KeyboardDoubleArrowDown fontSize='small' />}>
            {showAll ? t('showLess') : t('showMore')}
          </Button>
        </FlexBox>
      )}
    </>
  );
};

export default memo(IncidenceCommentsList);
