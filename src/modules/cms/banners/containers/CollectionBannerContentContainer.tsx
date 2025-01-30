import { memo, Suspense, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import BannerToggle from '../components/BannerToggle/BannerToggle';
import { BannerFormPaperTitle } from '../components/BannerFormPaperTitle';
import CollectionMultiBannerContainer from './CollectionMultiBannerContainer';
import { useBannerContext } from '../context/useBannerContext';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import CollectionBannerListContainer from './CollectionBannerListContainer';

const Component = {
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: CollectionBannerListContainer,
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: CollectionMultiBannerContainer,
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: CollectionBannerListContainer,
};
const CollectionBannerContentContainer = () => {
  const { collection } = useCollectionDetails();
  const { view, setView } = useBannerContext();
  const Content = useMemo(
    () => (collection?.subType ? Component[collection.subType] : CollectionBannerListContainer),
    [collection?.subType],
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
      title={<BannerFormPaperTitle title='Banner Agro' position='1/1' />}
      actions={<BannerToggle view={view} onChange={onChange} />}
    >
      <Suspense>
        <Content />
      </Suspense>
    </FormPaper>
  );
};

export default memo(CollectionBannerContentContainer);
