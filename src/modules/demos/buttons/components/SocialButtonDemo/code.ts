import { LANGUAGE } from 'constants/code-block';

export const socialButtonSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { Box } from "@mui/material";
import { FacebookButton, GoogleButton } from "@dfl/mui-react-common";

export default function SocialButtons() {
  
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <GoogleButton>Google</GoogleButton>
      <FacebookButton>Facebook</FacebookButton>
    </Box>
  );
}

`,
  },
];
