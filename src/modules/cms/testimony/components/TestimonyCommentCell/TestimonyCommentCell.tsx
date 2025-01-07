import { LongText } from '@dfl/mui-react-common';
import { Button } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  comment: string;
};

const TestimonyCommentCell = ({ comment }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div className='max-w-3xl flex gap-0'>
      <LongText lineClamp={2} text={comment} />
      <Button sx={{ p: 0 }}>{t('showMore')}</Button>
    </div>
  );
};

export default memo(TestimonyCommentCell);
