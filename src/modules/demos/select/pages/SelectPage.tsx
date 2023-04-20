import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import SelectDemosContainer from 'modules/demos/select/container/SelectDemosContainer';
import { Container } from 'modules/demos/buttons/components/styled';

const SelectPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('select.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('select.subtitle')}
      </H4>
      <SelectDemosContainer />
    </Container>
  );
};

export default memo(SelectPage);
