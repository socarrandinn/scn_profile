import { LANGUAGE } from 'constants/code-block';

export const loadingButtonsSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { Box } from "@mui/material";
import { LoadingButton } from "@dfl/mui-react-common";
import { FormControlLabel, Switch } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Buttons() {

  const [loading, setLoading] = useState(true);
  
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={(evt) => {
                setLoading(evt.target.checked);
              }}
            />
          }
          label='Loading'
      />
      <LoadingButton variant={"contained"} loading={loading} loadingPosition="start" startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={loading} loadingIndicator="Loading…">
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={loading} loadingPosition="start" startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={loading} loadingPosition="end" endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={truloadinge} loadingPosition="end" endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
    </Box>
  );
}

`,
  },
];
