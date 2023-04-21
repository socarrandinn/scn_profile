import { memo, useState } from 'react';
import CenterPageLayout from 'layouts/PageLayouts/CenterPageLayout';
import { FormControlLabel, Switch } from '@mui/material';
import ContentMock from 'modules/demos/layouts/components/ContentMock';

const Demo = () => {
  const [top, setTop] = useState(false);

  return (
    <CenterPageLayout top={top}>
        <FormControlLabel
            control={
                <Switch
                    checked={top}
                    onChange={(evt) => {
                      setTop(evt.target.checked);
                    }}
                />
            }
            label='Top Extra Space'
        />
        <ContentMock/>
    </CenterPageLayout>
  );
};

export default memo(Demo);
