import { Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import ResponsibleCell from 'modules/sales/common/components/ResponsibleCell/ResponsibleCell';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import IncidenceAssignedSelect from './IncidenceAssignedSelect';
import { IIncidence } from '../../interfaces';

const ResponsibleForm = ({ data }: { data: IIncidence }) => {
  const { t } = useTranslation('incidence');

  return (
    <FormPaper
      sx={{ marginTop: '0px' }}
      variant={{ title: 'h4' }}
      subtitle={t('assignResponsible')}
      title={t('fields.assignedTo')}
      mbHeader={'12px !important'}
    >
      <IncidenceAssignedSelect data={data?.responsible} incidenceId={data?._id as string} fullWidth />
      {data?.createdBy && <ResponsibleCell data={data?.createdBy} title={'fields.createdBy'} sx={{ mt: 2 }} />}
    </FormPaper>
  );
};

export default memo(ResponsibleForm);
