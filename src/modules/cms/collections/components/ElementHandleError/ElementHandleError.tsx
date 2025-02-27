import { COLLECTION_ERRORS, ERRORS } from '../../constants/collection-errors';
import { Alert } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ButtonRefresh from 'modules/inventory/common/components/ButtonRefresh/ButtonRefresh';
import { COLLECTION_ELEMENTS_LIST_KEY, COLLECTIONS_ONE_KEY } from '../../constants';
import { useCollectionDetails } from '../../context/CollectionContext';

const ElementHandleError = ({ error }: { error: any }) => {
  const { t } = useTranslation();
  const { collectionId } = useCollectionDetails();
  switch (error?.reference) {
    case ERRORS.COLLECTION_CHANGE_TO_DYNAMIC:
      return (
        <Alert
          sx={{ mb: 2 }}
          severity='error'
          action={
            <ButtonRefresh
              queryKey={[[collectionId || '', COLLECTIONS_ONE_KEY], [COLLECTION_ELEMENTS_LIST_KEY]]}
              size='small'
            />
          }
        >
          {t('errors:collection.COLLECTION_CHANGE_TO_DYNAMIC')}
        </Alert>
      );

    default:
      return <HandlerError error={error} errors={COLLECTION_ERRORS} />;
  }
};

export default ElementHandleError;
