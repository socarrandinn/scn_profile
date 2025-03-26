import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';

type Props = {
  value: string;
};
const ProductItemCell = ({ value }: Props) => {
  const { data: category } = useFindOneProduct(value);
  return (
    <AvatarNameCell
      link={`/inventory/products/${value}/general`}
      name={category?.name}
      variant={'rounded'}
      image={category?.media?.[0]}
    />
  );
};

export default ProductItemCell;
