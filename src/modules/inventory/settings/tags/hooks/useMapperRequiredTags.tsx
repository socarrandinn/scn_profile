import { useCallback } from 'react';
import { ISummaryTags, ITags, ITagsMap, TAG_NAMES, TAG_TYPE_ENUM } from '../interfaces';
import { useFindTags } from './useFindTags';
import { isArray, pick, sortBy } from 'lodash';

export const useMapperRequiredTags = (rule: TAG_NAMES) => {
  const { data: tags } = useFindTags();

  const mapperTagValue = useCallback(
    (tagByValue: ITagsMap): ISummaryTags[] => {
      if (!tags?.data) return []; // Asegúrate de que `tags?.data` esté disponible

      // Filtra los tags: incluye los requeridos o aquellos que tienen un valor en `tagByValue`
      const filtered = tags.data.filter((tag: ITags) => {
        const isRequired = tag?.rules?.[rule]?.required;
        const hasValue = tagByValue[tag._id as string]?.tag;
        return isRequired || hasValue; // Si es requerido o tiene valor, lo dejamos
      });

      // Mapea los elementos seleccionados y genera los resúmenes
      const mappedTags = filtered.map((tag: ITags) => {
        const tagValue = tagByValue[tag._id as string];
        const summary = pick(tag, ['_id', 'name', 'type', 'isMultiValue']);
        const value = tagValue?.type === TAG_TYPE_ENUM.ARRAY ? getArrayValue(tagValue?.value) : tagValue?.value;

        return { ...summary, ...tagValue, value, ruleRequired: tag?.rules?.[rule]?.required };
      });

      // Ordena la lista por `ruleRequired` (primero los requeridos)
      return sortBy(mappedTags, ['ruleRequired']).reverse(); // reverse para que `true` venga primero
    },
    [tags?.data, rule],
  );

  return { mapperTagValue };
};

// Función para manejar el tipo de valor ARRAY
const getArrayValue = (value: string[]) => {
  if (isArray(value)) return value; // Si ya es un array, lo dejamos tal cual
  return [value]; // Si no, lo convertimos en un array de un solo valor
};
