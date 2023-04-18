import { memo, useState } from 'react';
import LoadingButtonDocs from 'modules/docs/buttons/components/LoadingButtonDocs';
import { code } from 'modules/docs/buttons/components/LoadingButtonDocs/code';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common'
import SendIcon from '@mui/icons-material/Send';
import { Switch, Box, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ButtonsContainer = () => {
  const { t } = useTranslation('docs');
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ my: 4 }}>
        <LoadingButtonDocs
            codeTitle={t('buttons.loadingButtons.title')}
            codeDescription={t('buttons.loadingButtons.description')}
            code={code}>
            <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
                <FormControlLabel
                    control={
                    <Switch
                        defaultChecked
                        onChange={(evt) => { setLoading(evt.target.checked); }}
                    />
                }
                    label="Loading" />
                <LoadingButton
                    variant={'contained'}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={loading}
                    loadingIndicator="Loading…"
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={loading}
                    loadingPosition="end"
                    endIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={loading}
                    loadingPosition="end"
                    endIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
            </FlexBox>
        </LoadingButtonDocs>
    </Box>
  );
};

export default memo(ButtonsContainer);
