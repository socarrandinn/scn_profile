import { LoadingButton } from '@dfl/mui-react-common';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { useTranslation } from 'react-i18next';
import useCollectionElementsSortableUpdateForm from '../../hooks/useCollectionElementsSortableUpdateForm';

type Props = {
  elements: string[];
  collectionId: string;
  disabled: boolean;
  setHasChanges: (value: boolean) => void;
};
const UpdateSortableBannerButton = ({ elements, collectionId, disabled, setHasChanges }: Props) => {
  const { t } = useTranslation('collection');

  const { mutateAsync, isLoading } = useCollectionElementsSortableUpdateForm(COLLECTION_CONTENT_TYPE.BANNER);

  const onUpdate = () => {
    mutateAsync({ collectionId, elements }).then(() => {
      setHasChanges(false);
    });
  };
  return (
    <LoadingButton variant='outlined' onClick={onUpdate} loading={isLoading} disabled={disabled}>
      {t('updateOrder')}
    </LoadingButton>
  );
};

export default UpdateSortableBannerButton;
