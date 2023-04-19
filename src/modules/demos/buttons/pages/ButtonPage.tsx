import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ButtonDemosContainer from 'modules/demos/buttons/container/ButtonDemosContainer';
import { Container } from 'modules/demos/buttons/components/styled';

const ButtonPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('buttons.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('buttons.subtitle')}
      </H4>
      <ButtonDemosContainer />
    </Container>
  );
};

export default memo(ButtonPage);
