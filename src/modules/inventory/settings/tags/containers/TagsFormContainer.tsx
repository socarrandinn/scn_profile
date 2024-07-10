import TagsForm from '../components/TagsContentForm/TagsForm';

export const TagsFormContainer = ({ control, filterOption }: { control: any; filterOption?: any }) => {
  return <TagsForm control={control} filterOption={filterOption} />;
};
