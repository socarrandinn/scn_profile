import { memo } from 'react';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import { AddPermissionToRoleProviderModal } from '../components/AddPermissionToRoleProviderModal';

type AddPermissionToRoleProviderModalWithFetchProps = {
    open: boolean;
    onClose: () => void;
};

const AddPermissionToRoleProviderModalWithFetch = ({
    open,
    onClose,
}: AddPermissionToRoleProviderModalWithFetchProps) => {
    const { data: role } = useRoleProviderDetail();

    return <AddPermissionToRoleProviderModal role={role} open={open} onClose={onClose} />;
};

export default memo(AddPermissionToRoleProviderModalWithFetch);
