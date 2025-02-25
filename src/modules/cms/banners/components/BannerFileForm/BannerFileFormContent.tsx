import { memo } from 'react';

import { useCollectionBannerContext } from '../../context/useCollectionBannerContext';
import { IBanner } from '../../interfaces/IBanner';
import BannerFileForm from './BannerFileForm';
import { useForm } from 'react-hook-form';
type BannerFileFormContentProps = {
  banner?: IBanner;
};

const BannerFileFormContent = ({ banner }: BannerFileFormContentProps) => {
  const view = useCollectionBannerContext((state) => state.view);
  const { control } = useForm({});
  return <BannerFileForm view={view} control={control} error={null} isLoading={false} />;
};

export default memo(BannerFileFormContent);
