import { memo } from 'react';
import { useParams } from 'react-router-dom';
import RoleProviderDetailsContainer from '../containers/RoleProviderDetailsContainer';
import { RoleProviderDetailProvider } from '../contexts/RoleProviderDetailContext';

const RoleProviderDetails = () => {
    const { id } = useParams();

    return (
        <RoleProviderDetailProvider roleId={id as string}>
            <RoleProviderDetailsContainer />
        </RoleProviderDetailProvider>
    );
};

export default memo(RoleProviderDetails);
