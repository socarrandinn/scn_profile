import { memo } from 'react';
import { Container } from 'components/styled';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ResultDemoContainer from '../container/ResultDemoContainer';

const ResultDemoPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
        <H1 textAlign={'center'} mb={1}>
            {t('dataDisplay.result.title')}
        </H1>
        <H4 textAlign={'center'} mb={4}>
            {t('dataDisplay.result.subtitle')}
        </H4>
      <ResultDemoContainer />
    </Container>
  );
};

export default memo(ResultDemoPage);
