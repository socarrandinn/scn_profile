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

const findFirstErrorName = (errors: Record<string, any>): string | null => {
  for (const key in errors) {
    if (errors[key]?.ref?.name) {
      return errors[key].ref.name;
    }
    if (typeof errors[key] === 'object') {
      const nestedName = findFirstErrorName(errors[key]);
      if (nestedName) {
        return nestedName;
      }
    }
  }
  return null;
};
