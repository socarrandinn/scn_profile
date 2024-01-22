import { memo } from 'react';
import { Typography } from '@mui/material';
interface ILongTextProps {
  lineClamp: number;
  text: any;
  maxCharacters?: number;
}

const LongText = ({ lineClamp, text, maxCharacters, ...props }: ILongTextProps) => {
  return (
    <Typography
      title={text}
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical',
        maxWidth: maxCharacters ? `${maxCharacters}ch` : '100%',
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default memo(LongText);
