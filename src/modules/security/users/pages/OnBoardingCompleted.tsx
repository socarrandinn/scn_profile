import { memo } from 'react';
import { H1 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import OnBoardingCompletedContainer from '../containers/OnBoardingCompletedContainer';

const OnBoardingCompleted = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <H1 textAlign={'center'}>{t('setNewPassword')}</H1>
      <OnBoardingCompletedContainer />
    </>
  );
};

export default memo(OnBoardingCompleted);
