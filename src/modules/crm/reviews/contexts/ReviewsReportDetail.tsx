import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useFindOneReviews } from '../hooks/useFindOneReviews';
import { IReviews } from '../interfaces';
import { useParams } from 'react-router';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

type ReviewsReportDetailContextValue = {
  value?: any;
  isLoading?: boolean;
  error?: any;
  review?: IReviews;
  reviewId?: string;

  isEntityLoading?: boolean;
  entityError?: any;
  entity?: any;
};
// default value of the context
const defaultValue: ReviewsReportDetailContextValue = {};

// create context
const ReviewsReportDetailContext = createContext<ReviewsReportDetailContextValue>(defaultValue);

// Proptypes of Provider component
type ReviewsReportDetailContextProps = ChildrenProps & {
  children: any;
};

/**
 * Provider component
 * */
const ReviewsReportDetailProvider = ({ ...props }: ReviewsReportDetailContextProps) => {
  const { id } = useParams();
  const reviewId: string = id as string;
  const { data: review, isLoading, error } = useFindOneReviews(reviewId);
  const { data: entity, isLoading: isEntityLoading, error: entityError } = useFindOneProduct(review?.entity as string);

  useBreadcrumbName(review?._id, review?.title || '');

  return (
    <ReviewsReportDetailContext.Provider
      value={{ review, isLoading, error, reviewId, entity, isEntityLoading, entityError }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useReviewsReportDetailContext = () => {
  const context = useContext(ReviewsReportDetailContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { ReviewsReportDetailProvider, useReviewsReportDetailContext };
