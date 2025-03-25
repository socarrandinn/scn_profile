import { Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import ResponsibleCell from 'modules/sales/common/components/ResponsibleCell/ResponsibleCell';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ResponsibleForm = ({ data }: { data: any }) => {
  const { t } = useTranslation('incidence');

  return (
    <FormPaper
      sx={{ marginTop: '0px' }}
      variant={{ title: 'h4' }}
      title={t('fields.assignedTo')}
      mbHeader={'8px !important'}
    >
      <Typography variant='body2' sx={{ mb: 1 }}>{t('assignResponsible')}</Typography>
      <SelectUser name='responsible' multiple={false} size='small' />

      {data?.createdBy && <ResponsibleCell data={data?.createdBy} title={'fields.createdBy'} sx={{ mt: 2 }} />}
    </FormPaper>
  );
};

export default memo(ResponsibleForm);
