import { LANGUAGE } from 'constants/code-block';

export const outlinedButtonSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { Box } from "@mui/material";
import { ButtonOutlined } from "@dfl/mui-react-common";

export default function OutlinedButton() {
  
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <ButtonOutlined>Button</ButtonOutlined>
    </Box>
  );
}

`,
  },
];
