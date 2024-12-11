import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
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
  if (!tags || tags?.length === 0) return <TagsFormSkeleton />;
  if (tags?.length > 0) {
    return <TagsForm control={control} name={name} ruleRequired={ruleRequired} isEdit />;
  }

  return <></>;
};
