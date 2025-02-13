import { memo, Suspense, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import BannerToggle from '../components/BannerToggle/BannerToggle';
import { BannerFormPaperTitle } from '../components/BannerFormPaperTitle';
import CollectionBannerMultipleContainer from './CollectionBannerMultipleContainer';
import { useCollectionBannerContext } from '../context/useCollectionBannerContext';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import CollectionBannerSimpleContainer from './CollectionBannerSimpleContainer';
import { useTranslation } from 'react-i18next';
import CollectionBannerSliderContainer from './CollectionBannerSliderContainer';
import CollectionBannerDoubleContainer from './CollectionBannerDoubleContainer';

const Component = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: CollectionBannerSimpleContainer,
  [COLLECTION_BANNER_TYPE.DOUBLE_BANNER]: CollectionBannerDoubleContainer,
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: CollectionBannerMultipleContainer,
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: CollectionBannerSliderContainer,
};
const CollectionBannerContentContainer = () => {
  const { t } = useTranslation('collection');
  const { collection } = useCollectionDetails();
  const { view, setView } = useCollectionBannerContext();
  const Content = useMemo(
    () => (collection?.type ? Component[collection.type] : CollectionBannerSimpleContainer),
    [collection?.type],
  );
  const onChange = (e: any) => {
    if (e.target.value !== null) {
      const value = e.target.value;
      setView(value);
    }
  };

  return (
    <FormPaper
      nm
      title={<BannerFormPaperTitle title={collection?.name ?? 'Banner'} subtitle={t('viewDescription')} />}
      actions={<BannerToggle view={view} onChange={onChange} />}
    >
      <Suspense>
        <Content />
      </Suspense>
    </FormPaper>
  );
};

export default memo(CollectionBannerContentContainer);
