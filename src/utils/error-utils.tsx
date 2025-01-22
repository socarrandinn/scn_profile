/**
 * Función genérica para hacer scroll al primer campo con error.
 * @param errors Errores devueltos por react-hook-form.
 */
export const scrollToFirstError = (errors: Record<string, any>) => {
  const firstErrorField = findFirstErrorName(errors);
  if (firstErrorField) {
    const name = firstErrorField.replace(/\./g, '\\.');
    const element = document.querySelector(`[name="${name}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (element as HTMLElement).focus();
    } else {
      console.error(`No se encontró el elemento con el nombre: ${firstErrorField}`);
    }
  }
};

export const findFirstErrorName = (errors: Record<string, any>): string | null => {
  for (const key in errors) {
    const errorItem = errors[key];

    // Verificar si es un array
    if (Array.isArray(errorItem)) {
      for (const nestedError of errorItem) {
        const nestedName = findFirstErrorName(nestedError);
        if (nestedName) {
          return nestedName;
        }
      }
    }

    // Verificar si el error tiene una referencia con nombre
    if (errorItem?.ref?.name) {
      return errorItem.ref.name;
    }

    // Si es un objeto, hacer una búsqueda recursiva
    if (typeof errorItem === 'object' && errorItem !== null) {
      const nestedName = findFirstErrorName(errorItem);
      if (nestedName) {
        return nestedName;
      }
    }
  }
  return null;
};
