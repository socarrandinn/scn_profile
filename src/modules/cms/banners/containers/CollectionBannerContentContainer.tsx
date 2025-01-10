import { memo, useState } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import BannerToggle from '../components/BannerToggle/BannerToggle';
import CollectionBannerListContainer from './CollectionBannerListContainer';
import { BannerFormPaperTitle } from '../components/BannerFormPaperTitle';

const CollectionBannerContentContainer = () => {
  const [view, setView] = useState<'desktop' | 'module'>('desktop');
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
      <CollectionBannerListContainer view={view} />
    </FormPaper>
  );
};

export default memo(CollectionBannerContentContainer);
