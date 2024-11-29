import { memo, useMemo } from 'react';
import { ISummaryTags } from '../../../interfaces';
import FormTagCheckboxList from './FormTagCheckboxGroup';
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
  const { data } = useFindOneTags(tag._id as string);
  const options = useMemo(() => data?.values || [], [data]);

  console.log(options, 'options');

  const exceedLength = useMemo(() => (options?.length || 0) > 4, [options]);

  if (isMultiValue && !exceedLength) return <FormTagCheckboxList {...props} options={options} />;
  if (!isMultiValue && !exceedLength) return <FormTagRadioGroup {...props} options={options} />;

  return <FormTagSelect required {...props} multiple={isMultiValue} options={options} />;
};

export default memo(TagArraySelect);
