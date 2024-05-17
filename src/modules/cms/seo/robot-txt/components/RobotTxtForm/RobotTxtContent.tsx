import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useMemo } from 'react';
import { Button, ListItem, ListItemText, Stack, useMediaQuery, useTheme } from '@mui/material';
import { DateValue, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useRobotTxtCreateForm from '../../hooks/useRobotTxtCreateForm';
import RobotTxtForm from './RobotTxtForm';
import { useFindOneRobotTxtById } from '../../hooks/useFindOneLocalEntityById';
import { useRobotTxtContext } from '../../contexts/RobotTxtContext';
import { IRobotTxt } from '../../interfaces';
import { RobotTxtHistoryDrawer } from '../RobotTxtHistory/RobotTxtHistoryDrawer';
import { useToggle } from '@dfl/hook-utils';
import { RobotTxtHistory } from '../RobotTxtHistory';
import { Menu } from '@mui/icons-material';

const RobotTxtContent = () => {
  const { t } = useTranslation('common');
  const { robotTxt } = useFindOneRobotTxtById();
  const { checkRobotTxt } = useRobotTxtContext();

  const currentRobotTxt: IRobotTxt = useMemo(() => {
    return { data: robotTxt?.payload?.data || '' };
  }, [robotTxt]);

  const { control, onSubmit, error, isLoading } = useRobotTxtCreateForm(currentRobotTxt);
  const { isOpen, onClose, onOpen } = useToggle(false);
  const theme = useTheme();
  const resp = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack>
      <FormPaper nm>
        <ListItem
          sx={{
            padding: 0,
            margin: 0,
            flexDirection: 'row',
            alignItems: {
              md: 'center',
            },
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontWeight: 800,
            }}
            primary='Robot.txt'
            secondary={<DateValue value={robotTxt?.updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />}
          />
          <Stack height={'100%'} gap={1} direction={'row'} alignItems={'center'} justifyContent={{ xs: 'start' }}>
            <LoadingButton loading={isLoading} type='submit' form='robot-txt-form' variant='contained' size='small'>
              {t(checkRobotTxt ? 'seo:robot_txt:recover' : 'save')}
            </LoadingButton>
            {resp && (
              <Stack justifyContent={'end'} alignItems={'end'}>
                <Button startIcon={<Menu />} size='small' variant='outlined' onClick={onOpen}>
                  {t('seo:robot_txt:history')}
                </Button>
              </Stack>
            )}
          </Stack>
        </ListItem>
      </FormPaper>
      <FormPaper>
        <RobotTxtForm control={control} error={error} isLoading={isLoading} onSubmit={onSubmit} />
      </FormPaper>
      <RobotTxtHistoryDrawer onClose={onClose} open={isOpen}>
        <RobotTxtHistory resp={resp} onClose={onClose} />
      </RobotTxtHistoryDrawer>
    </Stack>
  );
};

export default memo(RobotTxtContent);
