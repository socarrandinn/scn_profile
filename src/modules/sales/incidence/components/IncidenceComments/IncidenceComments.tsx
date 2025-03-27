
import { FlexBox } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import IncidenceCommentForm from './IncidenceCommentForm';
import { FormPaper } from 'modules/common/components/FormPaper';
import IncidenceCommentsList from './IncidenceCommentsList';
import { IIncidenceComment } from '../../interfaces';
import { Grid } from '@mui/material';

type IncidenceCommentsProps = {
  incidenceId: string;
};

const comments: IIncidenceComment[] = [{
  _id: '1',
  message: 'El cliente reporta haber recibido una pasta de bocadito en mal estado',
  file: [],
  createdAt: '2023-01-01',
  createdBy: {
    _id: '1',
    fullName: 'Fernando Torres',
  },
}
]

const IncidenceComments = ({ incidenceId }: IncidenceCommentsProps) => {
  const { t } = useTranslation('incidence');

  return (
    <FormPaper sx={{ marginTop: '0px', borderRadius: '10px' }} title={t('common:comments')} variant={{ title: 'h4' }}>
      <FlexBox flexDirection='column'>
        <IncidenceCommentForm incidenceId={incidenceId}>
          <Grid item xs={12}>
            <IncidenceCommentsList comments={comments} />
          </Grid>
        </IncidenceCommentForm>
      </FlexBox>
    </FormPaper>
  );
};

export default memo(IncidenceComments);
