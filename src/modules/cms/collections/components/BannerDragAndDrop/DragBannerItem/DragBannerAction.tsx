import { memo } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useDeleteCollectionElement } from 'modules/cms/collections/hooks/useDeleteCollectionElement';
import { useParamsLink } from '@dfl/react-security';
import { Edit, DragIndicator } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import DeleteIcon from 'components/icons/DeleteIcon';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import removeImage from 'assets/images/collection/banner-element-delete.webp';
import { DeleteElementRowButton } from 'components/CollectionActions';

type UserStatusProps = {
  rowId: string;
  isDragging: boolean; // Prop para manejar el estado de arrastre
  listeners?: any; // Pasa los listeners desde el componente padre
  attributes?: any; // Pasa los attributes desde el componente padre
};

const DragBannerAction = ({ rowId, isDragging, listeners, attributes }: UserStatusProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const { collectionId, contentType } = useCollectionDetails();
  const handleEdit = useParamsLink({ bannerEdit: rowId });

  const { mutate, isLoading, error } = useDeleteCollectionElement(
    rowId,
    collectionId as string,
    contentType as COLLECTION_CONTENT_TYPE,
    onClose,
  );

  return (
    <Stack
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        flexDirection: 'row',
        gap: 1,
        /* for icons  */
        '.MuiIconButton-root': {
          backgroundColor: '#32323375',
          hover: {
            backgroundColor: '#323233',
          },
          svg: {
            fill: '#fff',
          },
        },
      }}
    >
      {/* Drag Handle: Ícono de arrastre */}
      <Tooltip title={t('collection:dragBanner')}>
        <IconButton
          size='small'
          {...listeners} // Aplica los listeners para el arrastre
          {...attributes} // Aplica los attributes para el arrastre
          sx={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <DragIndicator fontSize='small' />
        </IconButton>
      </Tooltip>

      {/* Botón de edición */}
      <Tooltip title={t('edit')}>
        <span>
          <IconButton onClick={handleEdit} size='small' disabled={isDragging}>
            <Edit fontSize='small' />
          </IconButton>
        </span>
      </Tooltip>

      {/* Botón de eliminación */}
      <DeleteElementRowButton
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        error={error}
        isLoading={isLoading}
        onConfirm={mutate}
        disabled={isDragging}
        imageUrl={removeImage}
        icon={
          <DeleteIcon
            fontSize='small'
            sx={{
              fill: 'none !important',
              stroke: '#fff',
            }}
          />
        }
        confirmationTitle={t('collection:deleteElement.title')}
        confirmationMessage={t('collection:deleteElement.subtitle')}
        confirmButtonText={t('delete')}
      />
    </Stack>
  );
};

export default memo(DragBannerAction);
