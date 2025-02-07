import * as yup from 'yup';

// Esquema de validación
const configSchema = yup.object().shape({
  headers: yup.object().shape({
    'x-workspace': yup.string().required('REACT_APP_MS_LOCATION_SPACE es requerido'),
    'api-key': yup.string().required('REACT_APP_MS_LOCATION_API_KEY es requerido'),
    Cookie: yup.string().required('REACT_APP_MS_LOCATION_ACCESS_TOKEN es requerido'),
  }),
  url: yup.string().url('URL inválida').required('REACT_APP_MS_LOCATION_URL es requerido'),
  isCuban: yup.boolean().required('REACT_APP_MS_LOCATION_IS_CUBAN debe ser true o false'),
});

export const MS_LOCATION_CONFIG = (() => {
  const config = {
    headers: {
      'x-workspace': process.env.REACT_APP_MS_LOCATION_SPACE ?? '',
      'api-key': process.env.REACT_APP_MS_LOCATION_API_KEY ?? '',
      Cookie: process.env.REACT_APP_MS_LOCATION_ACCESS_TOKEN ?? '',
    },
    url: process.env.REACT_APP_MS_LOCATION_URL ?? 'https://api-location.gc.dofleinisoftware.com/ms-location/api',
    isCuban: process.env.REACT_APP_IS_CUBAN_ADDRESS === 'true',
  };

  try {
    configSchema.validateSync(config, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      console.error('Error de configuración:');
      error.errors.forEach((err) => {
        console.error('-', err);
      });
    }
    throw new Error('Configuración inválida. Verifica las variables de entorno.');
  }

  return config;
})();
