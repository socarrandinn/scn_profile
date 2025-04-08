import { styled } from '@mui/material';

const config: any = {
  // max_height: 100,
  min_height: 300,
  menubar: false,
  branding: false,
  plugins: ['fullscreen', 'lists', 'link'],
  mobile: {
    toolbar_mode: 'wrap',
  },
  toolbar:
    'formatselect blocks bold italic forecolor backcolor fontsizeinput | alignleft aligncenter ' +
    'alignright bullist numlist link removeformat fullscreen',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  body_class: 'DFL-TinyEditor',
  default_link_target: '_blank',
  selector: 'textarea', // change this value according to your HTML
  // plugins: 'fullscreen',
  // menubar: 'view',
  // toolbar: 'fullscreen'
};

const StyleEditorContainer = styled('div')(({ theme }) => ({
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
  '.tox-fullscreen': {
    zIndex: '1210 !important',
  },
}));

export { config, StyleEditorContainer };
