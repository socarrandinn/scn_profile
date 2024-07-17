import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
import { IProductTags } from '../interfaces';

export const TagsFormContainer = ({
  control,
  tags,
  title,
}: {
  control: any;
  tags: IProductTags[] | null | undefined;
  title?: string;
}) => {
  if (!tags || tags?.length === 0) return <TagsFormSkeleton />;
  if (tags?.length > 0) {
    return <TagsForm control={control} title={title} />;
  }

  return <></>;
};
