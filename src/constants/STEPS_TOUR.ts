export interface IToursConfig {
  mainLayout: Step[];
  menu_inventory: Step[];
}

interface Step {
  selector: string;
  content: string;
}

export const STEPS_TOUR: IToursConfig = {
  mainLayout: [
    {
      selector: '[data-tour="step-navbar-1"]',
      content: 'Accede al menú de perfil para gestionar tu cuenta.',
    },
    {
      selector: '[data-tour="step-navbar-2"]',
      content: 'Aquí puedes ver las notificaciones importantes relacionadas con tu cuenta.',
    },
    {
      selector: '[data-tour="step-navbar-3"]',
      content: 'Selecciona el idioma del contenido para personalizar la visualización.',
    },
    {
      selector: '[data-tour="step-navbar-4"]',
      content: 'Cambia el idioma de la aplicación para una mejor experiencia.',
    },
    {
      selector: '[data-tour="step-navbar-5"]',
      content: 'Modifica el tema de la aplicación entre claro y oscuro.',
    },
    {
      selector: '[data-tour="step-navbar-6"]',
      content: 'Elige el tipo de vista entre el Centro de Distribución o los Almacenes.',
    },
    {
      selector: '[data-tour="step-sidebar-1"]',
      content: 'Haz clic aquí para volver al inicio rápidamente.',
    },
    {
      selector: '[data-tour="step-sidebar-2"]',
      content: 'Accede a tu inventario para gestionar tus productos.',
    },
    {
      selector: '[data-tour="step-sidebar-3"]',
      content: 'Aquí podrás gestionar las ventas realizadas en tu negocio.',
    },
    {
      selector: '[data-tour="step-sidebar-4"]',
      content: 'Accede a la sección de clientes para gestionar tu base de datos.',
    },
    {
      selector: '[data-tour="step-sidebar-5"]',
      content: 'Accede al CRM para gestionar las relaciones con tus clientes.',
    },
    {
      selector: '[data-tour="step-sidebar-6"]',
      content: 'Consulta los reportes detallados sobre las actividades y resultados.',
    },
    {
      selector: '[data-tour="step-sidebar-7"]',
      content: 'Administra la seguridad y permisos de acceso a las diferentes secciones.',
    },
  ],
  menu_inventory: [
    {
      selector: '[data-tour="step-menu-/inventory/products"]',
      content: 'Accede a la sección de productos para gestionar tus productos.',
    },
    {
      selector: '[data-tour="step-menu-/inventory/warehouses"]',
      content: 'Accede a la sección de almacenes para gestionarlos ',
    },
    {
      selector: '[data-tour="step-menu-/inventory/distribution-centers"]',
      content: 'Accede a la sección de centros de distribución para gestionarlos ',
    },
  ],
  //   default: [],
};
