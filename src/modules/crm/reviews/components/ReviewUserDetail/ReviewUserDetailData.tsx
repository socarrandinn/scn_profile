import { useMemo, memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { Avatar, Table, TableCell, TableRow, Typography } from '@mui/material';
import { imageUrl } from '@dfl/mui-react-common';
import ProductGeneralOrganizationFormSkeleton from 'modules/inventory/product/components/ProductGeneralOrganizationForm/ProductGeneralOrganizationFormSkeleton';
import { AccountCircle } from '@mui/icons-material';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { useReviewsReportDetailContext } from '../../contexts/ReviewsReportDetail';

type ProductInfoRowProps = {
  label: string;
  value: any;
};

const ProductInfoRow = ({ label, value }: ProductInfoRowProps) => (
  <Table>
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell> {value}</TableCell>
    </TableRow>
  </Table>
);

const ProductGeneralOrganization = () => {
  const { review } = useReviewsReportDetailContext();
  const { t } = useTranslation('reviews');
  const { data: user, isLoading, error } = useFindOneUsers(review?.owner as string);
  const image: string = imageUrl(user?.avatar?.thumb || '');

  const productArray = useMemo(
    () => [
      {
        label: 'common:avatar',
        value: (
          <Avatar sx={{ width: 40, height: 40 }} src={image}>
            <AccountCircle />
          </Avatar>
        ),
      },
      {
        label: 'common:phone',
        value: user?.phone || '-',
      },
      {
        label: 'common:email',
        value: user?.email,
      },
      {
        label: 'common:firstName',
        value: user?.firstName,
      },
      {
        label: 'common:lastName',
        value: user?.lastName,
      },
    ],
    [user],
  );

  return (
    <FormPaper title={t('fields.user.details')}>
      {isLoading && <ProductGeneralOrganizationFormSkeleton />}
      {!isLoading &&
        !error &&
        productArray.map((item, index) => <ProductInfoRow key={index} label={t(item.label)} value={item.value} />)}
    </FormPaper>
  );
};

export default memo(ProductGeneralOrganization);
