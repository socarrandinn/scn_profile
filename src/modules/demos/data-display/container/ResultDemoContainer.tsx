import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import EmptySearchResultDemo from '../components/EmptySearchResultDemo';
import ConnectivityErrorResultDemo from '../components/ConnectivityErrorResultDemo';
import ErrorResultDemo from '../components/ErrorResultDemo';

const ResultDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={4} flexDirection={'column'} alignItems={'stretch'} justifyContent={'center'}>
      <DemoSectionPanel
        title={t('dataDisplay.result.emptySearch.title')}
        description={t('dataDisplay.result.emptySearch.description')}
        linkId={'empty-search'}
      >
        <EmptySearchResultDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('dataDisplay.result.noConnection.title')}
        description={t('dataDisplay.result.noConnection.description')}
        linkId={'no-connection'}
      >
        <ConnectivityErrorResultDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('dataDisplay.result.error.title')}
        description={t('dataDisplay.result.error.description')}
        linkId={'error'}
      >
        <ErrorResultDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(ResultDemoContainer);
