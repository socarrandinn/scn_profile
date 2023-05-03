import { memo } from 'react';
import { H1, H4 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/styled';
import DatetimeDemosContainer from '../container/DatetimeDemosContainer';

const DatetimeDemosPage = () => {
  const { t } = useTranslation('demos');

  return (
    <Container className={'mx-auto my-8'}>
      <H1 textAlign={'center'} mb={1}>
        {t('datetime.title')}
      </H1>
      <H4 textAlign={'center'} mb={4}>
        {t('datetime.subtitle')}
      </H4>
      <DatetimeDemosContainer />
    </Container>
  );
};

export default memo(DatetimeDemosPage);
