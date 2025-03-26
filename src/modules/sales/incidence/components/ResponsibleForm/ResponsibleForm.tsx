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
      title={t('fields.assignedTo')}
      mbHeader={'8px !important'}
    >
      <Typography variant='body2' sx={{ mb: 1 }}>{t('assignResponsible')}</Typography>
      <IncidenceAssignedSelect data={data?.responsible} incidenceId={data?._id as string} />

      {data?.createdBy && <ResponsibleCell data={data?.createdBy} title={'fields.createdBy'} sx={{ mt: 2 }} />}
    </FormPaper>
  );
};

export default memo(ResponsibleForm);
