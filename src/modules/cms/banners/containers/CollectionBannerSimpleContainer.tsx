import { memo } from 'react';
import SimpleBannerOptions from '../components/fields/FormBannerRadioField/options/SimpleBannerOptions';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import SliderBannerOptions from '../components/fields/FormBannerRadioField/options/SliderBannerOptions/SliderBannerOptions';

const CollectionBannerSimpleContainer = () => {
  const { collectionId } = useCollectionDetails();
  const { data, isLoading } = useFindCollectionElements(collectionId as string, COLLECTION_CONTENT_TYPE.BANNER);

  if (isLoading || !data || data?.data?.length === 0) return <SimpleBannerOptions />;
  if (data?.data?.length === 1) return <SimpleBannerOptions banner={data?.data?.[0]} />;
  return <SliderBannerOptions options={data?.data} />;

  /*  return (
    <Form onSubmit={onSubmit} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <Controller
        name='position'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <RadioGroup {...field}>
            <SimpleBannerOptions filed={field} />
          </RadioGroup>
        )}
      />
    </Form>
  ); */
};

export default memo(CollectionBannerSimpleContainer);
