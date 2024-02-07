import { Button } from '@mui/material';
import { PaidOutlined } from '@mui/icons-material';

interface CommissionButtonProps {
  name: string;
  variant?: 'text' | 'outlined' | 'contained';

  // Methds
  onModalOpen?: () => void;
}

const CommissionButton = ({ name, variant = 'outlined', onModalOpen }: CommissionButtonProps) => {
  return (
    <Button variant={variant} onClick={onModalOpen} sx={{ width: { md: '200px' } }} startIcon={<PaidOutlined />}>
      { name }
    </Button>
  );
};

export default CommissionButton;
