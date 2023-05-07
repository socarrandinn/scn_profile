import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/styled';
import SelectDemosContainer from '../container/SelectDemosContainer';

const SelectDemosPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('selects.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('selects.subtitle')}
      </H4>
      <SelectDemosContainer />
    </Container>
  );
};

export default memo(SelectDemosPage);
