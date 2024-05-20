import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useMemo } from 'react';
import { Button, ListItem, ListItemText, Stack, useMediaQuery, useTheme } from '@mui/material';
import { DateValue, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useRobotTxtCreateForm from '../../hooks/useRobotTxtCreateForm';
import RobotTxtForm from './RobotTxtForm';
import { IRobotTxt } from '../../interfaces';
import { useToggle } from '@dfl/hook-utils';
import { Menu } from '@mui/icons-material';
import { SeoHistoryDrawer } from 'modules/cms/seo/common/components/SeoHistoryContent/SeoHistoryDrawer';
import SeoHistoryContent from 'modules/cms/seo/common/components/SeoHistoryContent/SeoHistoryContent';
import { useFindOneLocalEntityById } from 'modules/security/audit-logs/hooks/useFindOneLocalEntityById';
import { useAuditLogEntityContext } from 'modules/security/audit-logs/context/AuditLogEntityContext';

const RobotTxtContent = () => {
  const { t } = useTranslation('common');
  const { entity } = useFindOneLocalEntityById();
  const { checkEntity } = useAuditLogEntityContext();

  const currentRobotTxt: IRobotTxt = useMemo(() => {
    return { data: entity?.payload?.data || '' };
  }, [entity]);

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
            secondary={<DateValue value={entity?.updatedAt} format='dd-MM-yyyy | hh:mm:ss aa' />}
          />
          <Stack height={'100%'} gap={1} direction={'row'} alignItems={'center'} justifyContent={{ xs: 'start' }}>
            <LoadingButton loading={isLoading} type='submit' form='robot-txt-form' variant='contained' size='small'>
              {t(checkEntity ? 'seo:robot_txt:recover' : 'save')}
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
      <SeoHistoryDrawer onClose={onClose} open={isOpen}>
        <SeoHistoryContent resp={resp} onClose={onClose} />
      </SeoHistoryDrawer>
    </Stack>
  );
};

export default memo(RobotTxtContent);
