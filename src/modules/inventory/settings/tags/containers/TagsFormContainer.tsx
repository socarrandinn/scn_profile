import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
import { ISummaryTags, TAG_NAMES } from '../interfaces';

export const TagsFormContainer = ({
  control,
  tags,
  name,
}: {
  control: any;
  tags: ISummaryTags[] | null | undefined;
  name: TAG_NAMES;
}) => {
  if (!tags || tags?.length === 0) return <TagsFormSkeleton />;
  if (tags?.length > 0) {
    return <TagsForm control={control} name={name} />;
  }

  return <></>;
};
