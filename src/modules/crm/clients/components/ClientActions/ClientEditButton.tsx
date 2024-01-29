import { LoadingButton } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClientsCreateModal from 'modules/crm/clients/containers/ClientsCreateModal';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';

const ClientEditButton = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isLoading, error, client } = useClientDetails();
  return (
    <>
      <LoadingButton onClick={onOpen} variant='outlined' startIcon={<EditOutlinedIcon />}>
        {t('edit')}
      </LoadingButton>
      <ClientsCreateModal
        title={'edit'}
        open={isOpen}
        onClose={onClose}
        initValue={client}
        loadingInitData={isLoading}
        dataError={error}
      />
    </>
  );
};

export default memo(ClientEditButton);
