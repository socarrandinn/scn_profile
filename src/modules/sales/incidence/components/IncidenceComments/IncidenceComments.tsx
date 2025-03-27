import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const IncidenceComments = () => {
  const { t } = useTranslation('common');

  return (
    <FormPaper sx={{ marginTop: '0px', borderRadius: '10px' }} title={t('comments')} variant={{ title: 'h4' }}>
    </FormPaper>
  );
};

export default memo(IncidenceComments);
