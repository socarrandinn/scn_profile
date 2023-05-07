import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { HTMLPreview } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';

const html: string = \`<div align="left">
    <p>Material Design (codenamed Quantum Paper) is a design language developed by Google in 2014. Expanding on the "cards" that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows. Google announced Material Design on June 25, 2014, at the 2014 Google I/O conference.</p>
    <p>The main purpose of Material Design is the creation of a new visual language that combines principles of good design with technical and scientific innovation. Designer Matías Duarte explained that, "unlike real paper, our digital material can expand and reform intelligently. Material has physical surfaces and edges. Seams and shadows provide meaning about what you can touch." Google states that their new design language is based on paper and ink but implementation takes place in an advanced manner.</p>
    <a href="https://en.wikipedia.org/wiki/Material_Design" target="_blank">Wikipedia</a>
    </div>\`;

const Demo = () => {
  return (

      <Box>
        <HTMLPreview html={html} />
      </Box>
  );
};

export default Demo;

`,
  },
];
