import {
  EmptyFilter,
  IFilter,
  OperatorFilter,
  TermFilter,
} from '@dofleini/query-builder';

export const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Builds a partial search query filter using the provided text criteria and fields to search .
 * @param {string} text - The string to search for.
 * @param {string[]} fields - The array of fields to search in.
 * @returns {IFilter} - An IFilter object which represents the partial search query.
 */
export const buildSearchPartialQuery = (
  text: string,
  fields: string[],
): IFilter => {
  if (!fields?.length) return new EmptyFilter();

  const query: any[] = [];

  const queryText = escapeRegExp(text).replace(/ +/g, '|');

  const queryRegExp = new RegExp(queryText, 'gi');

  fields.forEach((field) => {
    query.push({ [field]: queryRegExp });
  });
  if (query.length === 1) return new TermFilter(query[0]);

  return new OperatorFilter({
    type: 'OR',
    filters: query,
  });
};
