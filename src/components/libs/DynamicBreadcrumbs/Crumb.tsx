import { memo, useState, useEffect, useCallback } from 'react';
import { Skeleton, Typography, Link } from '@mui/material';
import {
  Link as RouterLink,
} from 'react-router-dom';
interface CrumbProps {
  text?: string;
  href?: string;
  last: boolean;
  textGenerator?: () => string;
  loading?: boolean;
}

// Each individual "crumb" in the breadcrumbs list
function Crumb ({ text: defaultText, textGenerator, href, last = false, loading = false }: CrumbProps) {
  const [text, setText] = useState<string | undefined>(defaultText);

  const getText = async () => useCallback(() => {
    // If `textGenerator` is nonexistent, then don't do anything
    if (!textGenerator) { return; }
    // Run the text generator and set the text again
    const finalText = textGenerator();
    setText(finalText);
  }, [setText]);

  useEffect(() => {
    getText().then();
  }, [textGenerator, getText]);

  if (last) {
    return loading ? <Skeleton variant="text" sx={{ fontSize: '0.65rem', width: 80 }}/> : <Typography color="text.primary">{text}</Typography>
  }

  return (
      <Link underline="hover" color="inherit" to={href} component={RouterLink as any}>
        {loading ? <Skeleton variant="text" sx={{ fontSize: '0.65rem', width: 80 }}/> : text}
      </Link>
  );
}

export default memo(Crumb);
