import { IconButton, LongText } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useToggle } from '@dfl/hook-utils';
import { SimpleDialog } from 'modules/common/components/SimpleDialog';

type Props = {
  comment: string;
};

const TestimonyCommentCell = ({ comment }: Props) => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <>
      <div className='max-w-3xl flex items-center'>
        <LongText lineClamp={2} text={comment} />
        <IconButton tooltip={t('showMore')} onClick={onOpen}>
          <KeyboardDoubleArrowRightIcon fontSize='small' color='primary' />
        </IconButton>
      </div>
      <SimpleDialog open={isOpen} onClose={onClose} title={t('testimony:fields.comment')}>
        <div className='p-4'>{comment}</div>
      </SimpleDialog>
    </>
  );
};

export default memo(TestimonyCommentCell);
