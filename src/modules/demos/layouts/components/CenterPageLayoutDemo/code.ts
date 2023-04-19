import { LANGUAGE } from 'constants/code-block';

export const centerPageSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { memo, useState } from "react";
import { Grid, Skeleton, Switch } from "@mui/material";
import CenterPageLayout from "layouts/PageLayouts/CenterPageLayout";

export default function Demo() {
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
        label="Top Extra Space"
      />
      <Grid container spacing={2}>
        {[...Array(5)].map((_, index) => (
          <Grid item xs={12} key={index}>
            <Skeleton
              variant={"rectangular"}
              width="100%"
              height={28}
              animation={false}
            />
          </Grid>
        ))}
      </Grid>
    </CenterPageLayout>
  );
}


`,
  },
];
