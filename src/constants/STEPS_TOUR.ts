export interface IToursConfig {
  mainLayout: Step[];
  menu_inventory: Step[];
}

interface Step {
  _id: number;
  selector: string;
  content: string;
}

export const STEPS_TOUR: IToursConfig = {
  mainLayout: [
    {
      _id: 0,
      selector: '[data-tour="step-navbar-1"]',
      content: 'Accede al menú de perfil para gestionar tu cuenta.',
    },
    {
      _id: 1,
      selector: '[data-tour="step-navbar-2"]',
      content: 'Aquí puedes ver las notificaciones importantes relacionadas con tu cuenta.',
    },
    {
      _id: 2,
      selector: '[data-tour="step-navbar-3"]',
      content: 'Selecciona el idioma del contenido para personalizar la visualización.',
    },
    {
      _id: 3,
      selector: '[data-tour="step-navbar-4"]',
      content: 'Cambia el idioma de la aplicación para una mejor experiencia.',
    },
    {
      _id: 4,
      selector: '[data-tour="step-navbar-5"]',
      content: 'Modifica el tema de la aplicación entre claro y oscuro.',
    },
    {
      _id: 5,
      selector: '[data-tour="step-navbar-6"]',
      content: 'Elige el tipo de vista entre el Centro de Distribución o los Almacenes.',
    },
    {
      _id: 6,
      selector: '[data-tour="step-sidebar-1"]',
      content: 'Haz clic aquí para volver al inicio rápidamente.',
    },
    {
      _id: 7,
      selector: '[data-tour="step-sidebar-2"]',
      content: 'Accede a tu inventario para gestionar tus productos.',
    },
    {
      _id: 8,
      selector: '[data-tour="step-sidebar-3"]',
      content: 'Aquí podrás gestionar las ventas realizadas en tu negocio.',
    },
    {
      _id: 9,
      selector: '[data-tour="step-sidebar-4"]',
      content: 'Accede a la sección de clientes para gestionar tu base de datos.',
    },
    {
      _id: 10,
      selector: '[data-tour="step-sidebar-5"]',
      content: 'Accede al CRM para gestionar las relaciones con tus clientes.',
    },
    {
      _id: 11,
      selector: '[data-tour="step-sidebar-6"]',
      content: 'Consulta los reportes detallados sobre las actividades y resultados.',
    },
    {
      _id: 12,
      selector: '[data-tour="step-sidebar-7"]',
      content: 'Administra la seguridad y permisos de acceso a las diferentes secciones.',
    },
  ],
  menu_inventory: [
    {
      _id: 0,
      selector: '[data-tour="step-menu-/inventory/products"]',
      content: 'Accede a la sección de productos para gestionarlos.',
    },
    {
      _id: 1,
      selector: '[data-tour="step-menu-/inventory/warehouses"]',
      content: 'Accede a la sección de almacenes para gestionarlos ',
    },
    {
      _id: 2,
      selector: '[data-tour="step-menu-/inventory/distribution-centers"]',
      content: 'Accede a la sección de centros de distribución para gestionarlos ',
    },
  ],
};
