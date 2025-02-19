import { closestCenter, DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { IBanner } from 'modules/cms/banners/interfaces';
import { useEffect, useMemo, useState } from 'react';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DragBannerItem from './DragBannerItem';
import { Stack } from '@mui/material';
import UpdateSortableBannerButton from '../UpdateSortableBannerButton';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';

type Props = {
  banners: IBanner[];
  collectionId: string;
};

const DragBannerList = ({ banners, collectionId }: Props) => {
  const [items, setItems] = useState([] as UniqueIdentifier[]);
  const getBanner = (id: UniqueIdentifier) => banners?.find((b) => b._id === id) as IBanner;
  const [hasChanges, setHasChanges] = useState(false);
  const { collection } = useCollectionDetails();

  const sizeHeight = useMemo(() => {
    switch (collection?.type) {
      case COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER:
        return 195;
      default:
        return 90;
    }
  }, [collection?.type]);

  useEffect(() => {
    setItems(banners?.map((b) => b?._id as UniqueIdentifier));
    setHasChanges(false);
  }, [banners]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        // Indicar que hay cambios
        setHasChanges(true);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Stack gap={2}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <Stack gap={2}>
            {items?.map((item: UniqueIdentifier) => (
              <DragBannerItem height={sizeHeight} key={item} banner={getBanner(item)} id={item} />
            ))}
          </Stack>
        </SortableContext>
      </DndContext>

      <UpdateSortableBannerButton
        elements={items as string[]}
        collectionId={collectionId}
        disabled={!hasChanges}
        setHasChanges={setHasChanges}
      />
    </Stack>
  );
};

export default DragBannerList;
