import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'modules/demos/forms/components/styled';
import InputsDemosContainer from 'modules/demos/forms/container/InputsDemosContainer';

const FormsPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('forms.title')}
      </H1>
      <H4
          dangerouslySetInnerHTML={{ __html: t('forms.subtitle') }}
      />
      <InputsDemosContainer />
    </Container>
  );
};

export default memo(FormsPage);
