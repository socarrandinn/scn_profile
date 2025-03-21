import { memo } from 'react';
import { useOfferContext } from '../contexts/OfferContext';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import OfferDetailContainer from './OfferDetailContainer';

const OfferEditContainer = () => {
  const { offer, isLoading } = useOfferContext();
  useBreadcrumbName(offer?._id || '', offer?.name, isLoading);

  return <OfferDetailContainer />;
};

export default memo(OfferEditContainer);
