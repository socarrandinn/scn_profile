import { memo } from 'react';
import LoadingButtonDocs from 'modules/docs/buttons/components/LoadingButtonDocs';
import Box from '@mui/material/Box';
import { code } from 'modules/docs/buttons/components/LoadingButtonDocs/code';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common'
import SendIcon from '@mui/icons-material/Send';

const ButtonsContainer = () => {
  return (
    <Box sx={{ m: 4 }}>
        <LoadingButtonDocs code={code}>
            <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
                <LoadingButton
                    variant={'contained'}
                    loading={false}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={true}
                    loadingIndicator="Loading…"
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={true}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={true}
                    loadingPosition="end"
                    endIcon={<SendIcon />}
                >
                    <span>Submit</span>
                </LoadingButton>
                <LoadingButton
                    variant={'contained'}
                    loading={true}
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
