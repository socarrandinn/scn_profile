export const defaultEditorConfig = {
  maxHeight: 200,
  height: 150,
  menubar: false,
  branding: false,
  plugins: ['fullscreen', 'lists'],
  mobile: {
    toolbar_mode: 'wrap',
  },
  toolbar:
    'formatselect blocks bold italic forecolor backcolor alignleft aligncenter ' +
    'alignright bullist numlist fullscreen',
  content_style: 'body { font-family:Montserrat,Helvetica,Arial,sans-serif; font-size:14px }',
  body_class: 'DFL-TinyEditor',
  selector: 'textarea', // change this value according to your HTML
  // plugins: 'fullscreen',
  // menubar: 'view',
  // toolbar: 'fullscreen'
};
