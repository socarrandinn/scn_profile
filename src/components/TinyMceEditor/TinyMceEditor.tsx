import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Skeleton, styled, useTheme } from '@mui/material';
import { FormLabel } from '@dfl/mui-react-common';
import { defaultEditorConfig } from './default-editor-config';

const StyledEditorContainer = styled('div')(({ theme }) => ({
  '.tox-tinymce': {
    borderColor: `${theme.palette.mode === 'dark' ? theme.palette.divider : '#eee'} !important`,
  },
  '.tox-statusbar': {
    borderTopColor: `${theme.palette.mode === 'dark' ? theme.palette.divider : '#eee'} !important`,
  },
  '.tox .tox-toolbar-overlord, .tox .tox-statusbar, .tox-toolbar__primary, .tox-editor-header, .tox-edit-area__iframe':
    {
      backgroundColor: `${theme.palette.mode === 'dark' ? theme.palette.divider : '#eee'} !important`,
    },
  '.tox .tox-tbtn svg, #tox-icon-highlight-bg-color__color': {
    fill: `${theme.palette.mode === 'dark' ? '#FFF' : '#222f3e'} !important`,
  },
  '.tox .tox-statusbar a, .tox .tox-statusbar__path-item, .tox .tox-statusbar__wordcount': {
    color: `${theme.palette.mode === 'dark' ? 'rgb(255 255 255 / 70%)' : 'rgb(247 247 247 / 70%)'} !important`,
  },
}));

const defaultValue = '<p></p>';

export type TinyMceEditorProps = {
  value?: string;
  label?: string;
  maxHeight?: number;
  required?: boolean;
  disabled?: boolean;
  inputProps?: any;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  dark?: boolean;
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
  dark,
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
      ...defaultEditorConfig,
    };
    if (maxHeight) {
      settings.maxHeight = maxHeight;
    }
    if (theme.palette.mode === 'dark' || dark) {
      // @ts-ignore
      settings.content_css = '/css/tinyDark.css';
    } else {
      // @ts-ignore
      delete settings.content_css;
    }
    return settings;
  }, [theme.palette.mode, maxHeight]);

  const handleChange = () => {
    // @ts-ignore
    const value: string = (editorRef?.current?.getContent && editorRef?.current?.getContent()) || '';
    const isNull = value === defaultValue;

    onChange && onChange(isNull ? '' : value);
  };

  return (
    <StyledEditorContainer>
      <FormLabel label={label} required={required}>
        {/* TODO: find a better way to show skeleton when loading... */}
        {!loaded && <Skeleton height={50} />}
        <Editor
          disabled={disabled || inputProps?.readOnly}
          // initialValue={value || defaultValue }
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
      </FormLabel>
    </StyledEditorContainer>
  );
};

export default memo(TinyMceEditor);
