import { memo } from 'react';
import { H1, H5 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ButtonsContainer from 'modules/docs/buttons/container/ButtonsContainer';
import { DocsContainer } from 'modules/docs/buttons/components/styled';

const Button = () => {
  const { t } = useTranslation('docs');

  return (
    <DocsContainer className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>{t('buttons.title')}</H1>
      <H5 textAlign={'center'} mb={4}>{t('buttons.subtitle')}</H5>
      <ButtonsContainer />
    </DocsContainer>
  );
};

export default memo(Button);
