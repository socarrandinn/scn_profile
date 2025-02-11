import { ListItem, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCollectionDetails } from '../../context/CollectionContext';
import { useToggle } from '@dfl/hook-utils';
import { Add, ChecklistOutlined } from '@mui/icons-material';
import BannerElementCreateModal from 'modules/cms/banners/containers/BannerElementCreateModal';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { bannerInitValue } from 'modules/cms/banners/constants/banner.initValue';
import { BANNER_ELEMENT_OPERATION } from 'modules/cms/banners/interfaces';
import CollectionsBannerSelectElementModal from '../../containers/CollectionsBannerSelectElementModal';

export const CreateBannerMenuItem = () => {
  const { t } = useTranslation('collection');
  const { collectionId } = useCollectionDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <MenuItem onClick={onOpen}>
        <ListItem sx={{ p: '4px 0', m: 0 }}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary={t('elements.BANNER.createBanner')} />
        </ListItem>
      </MenuItem>

      <BannerElementCreateModal
        onClose={onClose}
        open={isOpen}
        collectionId={collectionId as string}
        initValue={{
          collection: collectionId as string,
          banner: bannerInitValue,
          operation: BANNER_ELEMENT_OPERATION.NEW_ELEMENT,
        }}
      />
    </>
  );
};

export const SelectBannerMenuItem = () => {
  const { t } = useTranslation('collection');
  const { collectionId } = useCollectionDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);
  /* const handleAddElement = useParamsLink({ addElement: collectionId });
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('addElement');

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('addElement');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]); */

  return (
    <>
      <MenuItem onClick={onOpen}>
        <ListItem sx={{ p: '4px 0', m: 0 }}>
          <ListItemIcon>
            <ChecklistOutlined />
          </ListItemIcon>
          <ListItemText primary={t('elements.BANNER.existBanners')} />
        </ListItem>
      </MenuItem>

      <CollectionsBannerSelectElementModal
        onClose={onClose}
        open={isOpen}
        contentType={COLLECTION_CONTENT_TYPE.BANNER}
        initValue={{
          collectionId: collectionId as string,
          elements: [],
          operation: BANNER_ELEMENT_OPERATION.EXISTS_ELEMENT,
        }}
        title='addElement'
      />
    </>
  );
};
