import { EmptyTags } from '../components/EmptyTags';
import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
import { ISummaryTags, TAG_NAMES } from '../interfaces';

type TagsFormContainerProps = {
  isLoading: boolean;
  control: any;
  tags: ISummaryTags[] | null | undefined;
  name: TAG_NAMES;
  ruleRequired?: boolean;
};

export const TagsFormContainer = ({ control, tags, name, ruleRequired, isLoading }: TagsFormContainerProps) => {
  if (isLoading) return <TagsFormSkeleton />

  if (!tags || tags?.length === 0) return <EmptyTags />;

  return <TagsForm control={control} name={name} ruleRequired={ruleRequired} isEdit />;
};
