
import { FlexBox } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import IncidenceCommentForm from './IncidenceCommentForm';
import { FormPaper } from 'modules/common/components/FormPaper';

type IncidenceCommentsProps = {
  incidenceId: string;
};

const IncidenceComments = ({ incidenceId }: IncidenceCommentsProps) => {
  const { t } = useTranslation('incidence');

  return (
    <FormPaper sx={{ marginTop: '0px', borderRadius: '10px' }} title={t('comments')} variant={{ title: 'h4' }}>
      <FlexBox flexDirection='column'>
        <IncidenceCommentForm incidenceId={incidenceId} />
        {/* <IncidenceCommentsList comments={comments} limit={numberLimit} /> */}
      </FlexBox>
    </FormPaper>
  );
};

export default memo(IncidenceComments);
