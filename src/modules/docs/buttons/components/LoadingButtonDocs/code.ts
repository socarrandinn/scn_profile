import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { Box } from "@mui/material";
import { LoadingButton } from "@dfl/mui-react-common";

export default function Buttons() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <LoadingButton variant={"contained"} loading={false} loadingPosition="start" startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={true} loadingIndicator="Loading…">
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={true} loadingPosition="start" startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={true} loadingPosition="end" endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={"contained"} loading={true} loadingPosition="end" endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
    </Box>
  );
}
`,
  },
];
