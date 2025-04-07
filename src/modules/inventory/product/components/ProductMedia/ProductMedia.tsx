import { imageUrl } from '@dfl/mui-react-common';
import { Avatar, Box, Card } from '@mui/material';
import { IImageMedia } from 'modules/common/interfaces';

type ProductMediaBoxProps = {
  pictures: IImageMedia[];
  height?: string;
  width?: string;
};

const ProductMedia = ({ pictures, height, width }: ProductMediaBoxProps) => (
  <Box display='flex' flexDirection='row' alignItems='center'>
    {pictures?.map((image: IImageMedia) => (
      <Card key={image._id} style={{ maxWidth: 160, margin: 8, borderRadius: 6 }}>
        <Avatar
          sx={{ height: width || '155px', width: height || '155px' }}
          alt={image?.thumb}
          src={imageUrl(image?.url)}
        />
      </Card>
    ))}
  </Box>
);

export default ProductMedia;
