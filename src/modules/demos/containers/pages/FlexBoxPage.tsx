import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FlexBoxDemosContainer from 'modules/demos/containers/container/FlexBoxDemosContainer';
import { Container } from 'modules/demos/buttons/components/styled';

const FlexBoxPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('containers.flexBox.title')}
      </H1>
      <H4
          dangerouslySetInnerHTML={{ __html: t('containers.flexBox.description') }}
      />
      <FlexBoxDemosContainer />
    </Container>
  );
};

export default memo(FlexBoxPage);
