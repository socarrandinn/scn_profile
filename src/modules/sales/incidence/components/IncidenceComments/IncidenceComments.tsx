
import { ConditionContainer, FlexBox, HandlerError, SkeletonList } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import IncidenceCommentForm from './IncidenceCommentForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import IncidenceCommentsList from './IncidenceCommentsList';
import { Grid } from '@mui/material';
import { useFindCommentsByIncidenceId } from '../../hooks/useFindCommentsByIncidenceId';

type IncidenceCommentsProps = {
  incidenceId: string;
};

const IncidenceComments = ({ incidenceId }: IncidenceCommentsProps) => {
  const { t } = useTranslation('incidence');
  const { data, isLoading, error } = useFindCommentsByIncidenceId(incidenceId);

  return (
    <FormPaper sx={{ marginTop: '0px', borderRadius: '10px' }} title={t('common:comments')} variant={{ title: 'h4' }}>
      <ConditionContainer active={!isLoading} alternative={<SkeletonList numberItemsToShow={3} />}>
        <HandlerError error={error} />
        <FlexBox flexDirection='column'>
          <IncidenceCommentForm incidenceId={incidenceId}>
            <Grid item xs={12}>
              <IncidenceCommentsList comments={data?.data} />
            </Grid>
          </IncidenceCommentForm>
        </FlexBox>
      </ConditionContainer>

    </FormPaper>
  );
};

export default memo(IncidenceComments);
