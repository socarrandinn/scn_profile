import { useTranslation } from 'react-i18next';

/**
 * Función genérica para hacer scroll al primer campo con error.
 * @param errors Errores devueltos por react-hook-form.
 */
export const scrollToFirstError = (errors: Record<string, any>, form: string = 'form') => {
  const firstErrorField = findFirstErrorName(errors);

  if (firstErrorField) {
    const name = firstErrorField.replace(/\./g, '\\.');

    const formElement = document.querySelector(`#${form}`);

    if (formElement) {
      const element = formElement.querySelector(`[name="${name}"]`) ?? formElement.querySelector(`#${name}`);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (element as HTMLElement).focus();
      } else {
        console.error(`No se encontró el elemento con el nombre: ${firstErrorField} en el formulario.`);
      }
    } else {
      console.error('No se encontró el formulario.');
    }
  }
};



export const findFirstErrorName = (errors: Record<string, any>, path: string[] = []): string | null => {
  for (const key in errors) {
    const errorItem = errors[key];
    const currentPath = [...path, key]; // Construye el camino actual con la clave

    // Caso 1: Verificar si el error es un array y realizar búsqueda recursiva
    if (Array.isArray(errorItem)) {
      for (const nestedError of errorItem) {
        const nestedName = findFirstErrorName(nestedError, currentPath);
        if (nestedName) {
          return nestedName;
        }
      }
    }

    // Caso 2: Si es un objeto, realizar búsqueda recursiva
    if (typeof errorItem === 'object' && errorItem !== null) {
      const nestedName = findFirstErrorName(errorItem, currentPath);
      if (nestedName) {
        return nestedName;
      }
    }

    // Caso 3: Si el error tiene una referencia con nombre, devolverlo
    if (errorItem?.ref?.name) {
      return errorItem.ref.name;
    }
  }

  // Si no se encontró un error, retornar null
  return null;
};

export const getErrorMessage = (error: any): string | null => {
  if (!error) return null;

  if (error?.message) {
    return error.message;
  }

  if (typeof error === 'object' && !Array.isArray(error)) {
    for (const key in error) {
      const message = getErrorMessage(error[key]);
      if (message) return message;
    }
  }

  if (Array.isArray(error)) {
    for (const item of error) {
      const message = getErrorMessage(item);
      if (message) return message;
    }
  }

  return null;
};