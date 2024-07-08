import ProductTagsForm from '../../components/ProductTagsForm/ProductTagsForm';

export const ProductTagsFormContainer = ({ control, filterOption }: { control: any; filterOption?: any }) => {
  return <ProductTagsForm control={control} filterOption={filterOption} />;
};
