import { useCallback } from 'react';
import { ISummaryTags, ITags, ITagsMap, TAG_NAMES, TAG_TYPE_ENUM } from '../interfaces';
import { useFindTags } from './useFindTags';
import { isArray, pick, sortBy } from 'lodash';

export const useMapperRequiredTags = (rule: TAG_NAMES) => {
  const { data: tags } = useFindTags();

  const getArrayValue = (tag: ISummaryTags, isMultiValue: boolean) => {
    if (TAG_TYPE_ENUM.ARRAY === tag?.type) {
      if (isArray(tag?.value)) {
        if (isMultiValue) return tag?.value;
        return [tag?.value[0]];
      }
      return [tag?.value];
    }

    return tag?.value;
  };

  const mapperArrayValue = (tags: ISummaryTags[]) =>
    tags?.map((tag) => ({ ...tag, value: getArrayValue(tag, tag?.isMultiValue) }));

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
        const value = getArrayValue(tagValue, tag?.isMultiValue);
        return { ...summary, value, ruleRequired: tag?.rules?.[rule]?.required };
      });

      // Ordena la lista por `ruleRequired` (primero los requeridos)
      return sortBy(mappedTags, ['ruleRequired']).reverse(); // reverse para que `true` venga primero
    },
    [tags?.data, rule],
  );

  return { mapperTagValue, getArrayValue, mapperArrayValue, totalTags: tags?.data?.length };
};
