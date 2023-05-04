import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, LongText, TextField } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';

const text: string = \`Nonumy augue amet eos aliquyam erat sea diam ipsum dolor diam sed ipsum eu et dolor ut consetetur ipsum. Nulla sit accusam option nonumy dolore eirmod duo sea commodo dolor nonumy ut ut ut. Ut no ea sanctus magna placerat suscipit ex at soluta vero magna sadipscing diam magna. Tempor at sanctus eirmod in et wisi aliquyam sit nonumy justo eos kasd accusam sadipscing eu diam labore. Facer no et dignissim nonumy veniam diam at ut vel justo voluptua magna at et ea. Et augue hendrerit aliquam. Eirmod dolore elit et ut sea duo ullamcorper ullamcorper. Voluptua amet et amet adipiscing odio duo sit aliquyam nonummy rebum ut diam rebum nonumy.
Aliquam et et dolore nostrud laoreet kasd et aliquam vero adipiscing. Sed nisl amet ut ea lorem clita ut dolores dolores eirmod ea duo diam. Zzril lorem nonumy ad labore liber rebum magna laoreet sed est vel rebum et eu stet consectetuer. Et no accusam justo sit clita rebum gubergren. Consequat dignissim eum. Aliquyam et diam rebum dolores dolores euismod esse odio amet euismod. Quod kasd et rebum suscipit nam est magna dolore lorem diam ut nihil dolor. Dolores eos dolore et amet amet hendrerit ullamcorper stet accusam elitr dolore augue sea et dolore nonummy. Delenit euismod dolor ex nulla molestie diam ea takimata dolore dolore exerci justo.
Invidunt et clita. Molestie aliquyam elitr dolores justo justo diam quis consetetur kasd ad lorem adipiscing dolor consetetur lorem sit elitr. Elitr lorem at nulla nonumy vero nonummy dolor amet diam vel justo et accusam. Consetetur labore at accumsan luptatum adipiscing eirmod accusam sit et no diam et tation at. Lorem et sanctus. Eos nulla erat cum kasd elitr dolores laoreet molestie et eirmod dolore sed sea takimata euismod.
Gubergren lorem et kasd erat sea lorem eirmod. Voluptua veniam no gubergren sed clita dolor diam nisl luptatum molestie magna vero rebum imperdiet justo option ut. Exerci no blandit wisi no rebum eos ea delenit nulla facilisis gubergren est diam feugiat elitr ea diam voluptua. Magna diam accusam. Diam est et esse sea diam no ipsum takimata et vel ipsum. Amet wisi aliquyam duo consetetur est facilisi vero vero praesent sea consetetur justo. Ullamcorper tempor eirmod tincidunt diam eirmod no assum ex nulla sanctus erat lorem. Magna cum et te nostrud enim justo no diam erat tempor diam. Congue odio eos et elitr ut quis volutpat et tempor dolor et ea. Facilisis et ut iriure lorem dolores lorem tincidunt et et luptatum ea velit aliquyam et sit nulla. Et nostrud luptatum et illum at ea gubergren vero lorem gubergren et duo in commodo facer.
Nonumy labore tempor ut consetetur. Et sed dolor sadipscing ad. Praesent lorem erat illum ullamcorper magna sit quis cum magna minim nonumy. Lorem praesent velit. Et sit amet vulputate accusam. Tincidunt lorem dolor ea consetetur. Diam diam est delenit no eirmod diam accusam ipsum et at amet ut sed vero invidunt eirmod.\`;

const LongTextDemo = () => {
  const [lineClamp, setLineClamp] = useState(5);
  const [maxCharacters, setMaxCharacters] = useState(200);

  return (
    <FlexBox flexDirection={'column'} gap={4} alignItems={'stretch'} justifyContent={'center'}>
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <TextField
          sx={{ minWidth: 150 }}
          label={'Line Clamp'}
          value={lineClamp}
          type={'number'}
          inputProps={{ min: 5, max: 50 }}
          onChange={(event) => {
            setLineClamp(+event?.target?.value);
          }}
        />
        <TextField
          sx={{ minWidth: 150 }}
          label={'Max Characters'}
          value={maxCharacters}
          type={'number'}
          inputProps={{ min: 50, max: 1000, step: 10 }}
          onChange={(event) => {
            setMaxCharacters(+event?.target?.value);
          }}
        />
      </FlexBox>
      <Box>
        <LongText text={text} lineClamp={lineClamp} maxCharacters={maxCharacters} />
      </Box>
    </FlexBox>
  );
};

export default LongTextDemo;

`,
  },
];
