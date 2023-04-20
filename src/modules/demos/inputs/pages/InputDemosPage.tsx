import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import InputDemosContainer from 'modules/demos/inputs/container/InputDemosContainer';
import { Container } from 'modules/demos/inputs/components/styled';

const InputDemosPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('inputs.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('inputs.subtitle')}
      </H4>
      <InputDemosContainer />
    </Container>
  );
};

export default memo(InputDemosPage);
