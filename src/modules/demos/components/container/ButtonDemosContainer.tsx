import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import OutlinedButtonCodeDemo from '../components/OutlinedButtonDemo';
import SocialButtonDemo from '../components/SocialButtonDemo';
import LoadingButtonDemo from '../components/LoadingButtonDemo';
import IconButtonDemo from '../components/IconButtonDemo';

const ButtonDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
      <DemoSectionPanel
        title={t('buttons.outlinedButtons.title')}
        description={t('buttons.outlinedButtons.description')}
        linkId={'outlined'}
      >
        <OutlinedButtonCodeDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('buttons.iconButton.title')}
        description={t('buttons.iconButton.description')}
        linkId={'icon-button'}
      >
        <IconButtonDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('buttons.socialButtons.title')}
        description={t('buttons.socialButtons.description')}
        linkId={'social'}
      >
        <SocialButtonDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('buttons.loadingButtons.title')}
        description={t('buttons.loadingButtons.description')}
        linkId={'loading'}
      >
        <LoadingButtonDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(ButtonDemosContainer);
