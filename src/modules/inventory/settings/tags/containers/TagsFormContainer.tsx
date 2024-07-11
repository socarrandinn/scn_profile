import TagsForm from '../components/TagsContentForm/TagsForm';
import TagsFormSkeleton from '../components/TagsContentForm/TagsFormSkeleton';
import { IProductTags } from '../interfaces';

export const TagsFormContainer = ({ control, tags }: { control: any; tags: IProductTags[] | null | undefined }) => {
  if (!tags || tags?.length === 0) return <TagsFormSkeleton />;
  if (tags?.length > 0) {
    return <TagsForm control={control} />;
  }

  return <></>;
};
