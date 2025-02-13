import { EmptyTags } from '../components/EmptyTags';
import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
import { useFindTags } from '../hooks/useFindTags';
import { TAG_NAMES } from '../interfaces';

type TagsFormContainerProps = {
  isLoading: boolean;
  control: any;
  // tags: ISummaryTags[] | null | undefined;
  name: TAG_NAMES;
  ruleRequired?: boolean;
};

export const TagsFormContainer = ({ control, name, ruleRequired, isLoading }: TagsFormContainerProps) => {
  const { data: allTags, isLoading: isLoadingTags } = useFindTags();
  if (isLoading || isLoadingTags) return <TagsFormSkeleton />;

  if (!allTags || allTags?.data?.length === 0) return <EmptyTags />;

  return <TagsForm control={control} name={name} ruleRequired={ruleRequired} isEdit />;
};
