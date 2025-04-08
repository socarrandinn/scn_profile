import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Box, FormHelperText, Skeleton, useTheme } from '@mui/material';
import { FormLabel } from '@dfl/mui-react-common';
import { StyleEditorContainer, config } from './config';

const defaultValue = '<p></p>';

export type TinyMceEditorProps = {
  value?: string;
  label?: string;
  maxHeight?: number;
  minHeight?: number;
  required?: boolean;
  disabled?: boolean;
  inputProps?: any;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  dark?: boolean;
  helperText?: string;
  error?: boolean;
  name: string;
};

const TinyMceEditor = ({
  value,
  onChange,
  label,
  required,
  autoFocus,
  disabled,
  inputProps,
  maxHeight,
  minHeight,
  dark,
  error,
  helperText,
  ...props
}: TinyMceEditorProps) => {
  const editorRef = useRef(null);
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const wrapperConfig = useMemo(() => {
    const settings = {
      ...config,
    };
    if (maxHeight) {
      settings.maxHeight = maxHeight;
    }
    if (minHeight) {
      settings.height = minHeight;
    }
    if (theme.palette.mode === 'dark' || dark) {
      // @ts-ignore
      settings.content_css = '/css/tinyDark.css';
    } else {
      // @ts-ignore
      delete settings.content_css;
    }
    return settings;
  }, [maxHeight, minHeight, theme.palette.mode, dark]);

  const handleChange = () => {
    // @ts-ignore
    const value: string = (editorRef?.current?.getContent && editorRef?.current?.getContent()) || '';
    const isNull = value === defaultValue;

    onChange && onChange(isNull ? '' : value);
  };

  const borderColor = error ? 'red' : 'white';
  return (
    <FormLabel label={label} required={required}>
      <Box border={`1px solid ${borderColor}`} borderRadius={2} id={props?.name}>
        <StyleEditorContainer>
          {!loaded && <Skeleton height={minHeight || 50} />}
          <Editor
            disabled={disabled || inputProps?.readOnly}
            value={value}
            {...props}
            onScriptsLoad={onLoad}
            onInit={(evt, editor) => {
              onLoad();
              // @ts-ignore
              editorRef.current = editor;

              if (autoFocus) {
                editor?.execCommand('mceFocus');
              }
            }}
            // @ts-ignore
            init={wrapperConfig}
            onEditorChange={handleChange}
          />
        </StyleEditorContainer>
      </Box>
      {helperText ? (
        <FormHelperText sx={{ marginLeft: 2.3 }} error={error}>
          {helperText}
        </FormHelperText>
      ) : (
        <></>
      )}
    </FormLabel>
  );
};

export default memo(TinyMceEditor);
