import { memo } from 'react';
import { H1, H5 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ButtonDemosContainer from 'modules/demos/buttons/container/ButtonDemosContainer';
import { DocsContainer } from 'modules/demos/buttons/components/styled';

const ButtonPage = () => {
  const { t } = useTranslation('docs');

  return (
    <DocsContainer className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('buttons.title')}
      </H1>
      <H5 textAlign={'center'} mb={4}>
        {t('buttons.subtitle')}
      </H5>
      <ButtonDemosContainer />
    </DocsContainer>
  );
};

export default memo(ButtonPage);
