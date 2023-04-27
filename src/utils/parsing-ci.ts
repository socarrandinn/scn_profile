import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';

/**
 * Parses a given CI (Carnet de Identidad) number and returns the date of birth and gender of the person.
 *
 * @param {string} ci - The CI number to parse.
 * @returns {Object} - An object containing the date of birth and gender of the person.
 * @throws {Error} - If the given CI number is invalid.
 */

export const parseCI = (ci: string) => {
  try {
    const year = parseInt(ci.substring(0, 2));
    const month = parseInt(ci.substring(2, 4));
    const day = parseInt(ci.substring(4, 6));
    const genderDigit = parseInt(ci.substring(9, 10));

    const lastCentury = parseInt(`19${year}`);
    const currentCentury = parseInt(`20${year}`);
    const fullYear = currentCentury > new Date().getFullYear() ? lastCentury : currentCentury;

    const gender = genderDigit % 2 === 0 ? GenderEnum.male : GenderEnum.female;
    const birthday = new Date(fullYear, month - 1, day);
    return { birthday, gender };
  } catch (e) {
    throw new Error('Invalid CI')
  }
}
