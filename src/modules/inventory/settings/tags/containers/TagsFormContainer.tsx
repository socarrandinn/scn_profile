import { EmptyTags } from '../components/EmptyTags';
import TagsForm from '../components/TagsContentForm/TagsForm';
import { ISummaryTags, TAG_NAMES } from '../interfaces';

export const TagsFormContainer = ({
  control,
  tags,
  name,
  ruleRequired,
}: {
  control: any;
  tags: ISummaryTags[] | null | undefined;
  name: TAG_NAMES;
  ruleRequired?: boolean;
}) => {
  if (!tags || tags?.length === 0) return <EmptyTags />;

  return <TagsForm control={control} name={name} ruleRequired={ruleRequired} isEdit />;
};
