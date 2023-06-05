import React, { memo } from 'react'
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { Skeleton } from '@mui/material';

// type ImportantNotificationProps = {}

const ImportantNotification = () => {
  return (
        <PaperTabView firsts>
            <Skeleton sx={{ maxWidth: '500px', width: '50%', minHeight: '45px' }} animation={false}/>
            <Skeleton sx={{ width: '80%', minHeight: '16px', mt: 2 }} animation={false}/>
            <Skeleton sx={{ width: '80%', minHeight: '16px' }} animation={false}/>
            <Skeleton sx={{ width: '40%', minHeight: '16px' }} animation={false}/>
            <Skeleton sx={{ width: 100, minHeight: '16px', mt: 2 }} animation={false}/>

        </PaperTabView>
  );
}

export default memo(ImportantNotification);
