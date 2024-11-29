import { memo, useMemo } from 'react';
import { ISummaryTags } from '../../../interfaces';
import FormTagCheckboxList from './FormTagCheckboxList';
import FormTagSelect from './FormTagSelect';
import { useFindOneTags } from '../../../hooks/useFindOneTags';
import FormTagRadioGroup from './FormTagRadioGroup';
type TagArraySelectProps = {
  tag: ISummaryTags;
  name: string;
  label: string;
};

const TagArraySelect = ({ tag, ...props }: TagArraySelectProps) => {
  const { isMultiValue } = tag;
  const { data: options } = useFindOneTags(tag._id as string);

  console.log(options)

  const exceedLength = useMemo(() => (options?.values?.length || 0) > 4, [options]);

  if (isMultiValue && !exceedLength) return <FormTagCheckboxList {...props} options={options?.values || []} />;
  // if (!isMultiValue && !exceedLength) return <FormTagRadioGroup {...props} options={options?.values || []} />;

  return <FormTagSelect required {...props} multiple={!isMultiValue} options={options?.values || []} />;
};

export default memo(TagArraySelect);
