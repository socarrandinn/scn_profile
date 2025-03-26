import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useFindOneCategory } from 'modules/inventory/settings/category/hooks/useFindOneCategory';

type Props = {
  value: string;
};
const CategoryCell = ({ value }: Props) => {
  const { data: category } = useFindOneCategory(value);
  return (
    <AvatarNameCell
      link={`/inventory/categories/${value}/general`}
      name={category?.name}
      variant={'rounded'}
      image={category?.image}
    />
  );
};

export default CategoryCell;
