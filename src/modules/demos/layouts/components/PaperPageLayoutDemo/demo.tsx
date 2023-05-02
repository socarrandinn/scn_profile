import React, { memo } from 'react';
import PagePaperLayout from 'layouts/PageLayouts/PagePaperLayout';
import ContentMock from 'modules/demos/layouts/components/ContentMock';
import { IconButton } from '@mui/material';
import { Email, Send } from '@mui/icons-material';
import { GeneralActions } from 'layouts/portals';

const Actions = () => {
  return (
    <GeneralActions>
      <IconButton>
        <Send />
      </IconButton>
      <IconButton>
        <Email />
      </IconButton>
    </GeneralActions>
  );
};

const Demo = () => {
  return (
    <PagePaperLayout title={'Title'}>
      <Actions />
      <ContentMock />
    </PagePaperLayout>
  );
};

export default memo(Demo);
