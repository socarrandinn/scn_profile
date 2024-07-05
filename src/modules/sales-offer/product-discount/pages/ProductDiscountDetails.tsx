import { memo, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import ProductDiscountDetailsContainer from '../containers/ProductDiscountDetailsContainer';
import { ProductDiscountDetailsProvider } from '../contexts/ProductDiscountDetails';

const ProductDiscountDetails = () => {
  const { pathname } = useLocation();
  const push = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!pathname.includes('details')) {
      push(`/sales/offers/settings/product_discounts/${ id }/details`);
    }
  }, [id, pathname]);

  return (
    <ProductDiscountDetailsProvider >
      <ProductDiscountDetailsContainer />
    </ProductDiscountDetailsProvider>
  );
};

export default memo(ProductDiscountDetails);
