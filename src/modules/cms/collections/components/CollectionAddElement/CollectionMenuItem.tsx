import { ListItem, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCollectionDetails } from '../../context/CollectionContext';
import { Add, ChecklistOutlined } from '@mui/icons-material';
import { useParamsLink } from '@dfl/react-security';

export const CreateBannerMenuItem = ({ onOpen }: { onOpen: VoidFunction }) => {
  const { t } = useTranslation('collection');

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
    </>
  );
};

export const SelectBannerMenuItem = () => {
  const { t } = useTranslation('collection');
  const { collectionId } = useCollectionDetails();
  const handleAddElement = useParamsLink({ addElement: collectionId });

  return (
    <>
      <MenuItem onClick={handleAddElement}>
        <ListItem sx={{ p: '4px 0', m: 0 }}>
          <ListItemIcon>
            <ChecklistOutlined />
          </ListItemIcon>
          <ListItemText primary={t('elements.BANNER.existBanners')} />
        </ListItem>
      </MenuItem>
    </>
  );
};
