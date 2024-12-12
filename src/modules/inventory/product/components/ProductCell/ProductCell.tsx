import { memo, ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';

type ProductCellProps = {
  productId: string;
  name: string;
  avatar?: IImageMedia;
  email?: string;
  category?: string;
  position?: string;
  titleComponent?: ReactNode;
  className?: string;
};

const LinkPermission = ({ children, productId }: ChildrenProps & { productId: string }) => {
  const { hasPermission } = useSecurity()
  if (hasPermission(PRODUCT_PERMISSIONS.PRODUCT_VIEW)) {
    return <ReactLink to={`/rrhh/products/${productId}/personal`} underline={'hover'}>
      {children}
    </ReactLink>
  }
  return <>{children}</>
}

const ProductCell = ({
  productId,
  name,
  avatar,
  email,
  category,
  position,
  titleComponent,
  className
}: ProductCellProps) => {
  if (!productId) {
    return <></>;
  }
  return (
    <Box className={className}>
      {titleComponent}
      <LinkPermission productId={productId}>
        <FlexBox alignItems={'center'} gap={1}>
          <AvatarMedia alt={name} avatar={avatar} />
          <Stack>
            <Typography>{name}</Typography>
            <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
              {position || category || email}
            </Typography>
          </Stack>
        </FlexBox>
      </LinkPermission>
    </Box>
  );
};

export default memo(ProductCell);
