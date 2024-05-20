import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useSeoHistoryContext } from 'modules/cms/seo/common/contexts/SeoHistoryContext';
import useStaticSiteMapItemCreateForm from '../../hooks/useStaticSiteMapItemCreateForm';
import StaticSiteMapItemForm from './StaticSiteMapItemForm';
import StaticSiteMapItemList from '../StaticSiteMapItemList/StaticSiteMapItemList';
import StaticSiteMapItemEditModal from '../../containers/StaticSiteMapItemEditModal';

const StaticSiteMapItemFormContent = () => {
  const { t } = useTranslation(['common', 'seo']);
  const { checkSeoHistory } = useSeoHistoryContext();
  const { control, onSubmit, error, isLoading } = useStaticSiteMapItemCreateForm();

  return (
    <Stack>
      <FormPaper>
        <Stack gap={2}>
          <StaticSiteMapItemForm control={control} error={error} isLoading={isLoading} onSubmit={onSubmit} />
          <Stack height={'100%'} gap={1} direction={'row'} alignItems={'center'} justifyContent={{ xs: 'end' }}>
            <LoadingButton loading={isLoading} type='submit' form='static-site-map-form' variant='contained'>
              {t(checkSeoHistory ? 'seo:robot_txt:recover' : 'save')}
            </LoadingButton>
          </Stack>
        </Stack>
      </FormPaper>

      <FormPaper title={t('seo:static_site_map_item.list')}>
        <StaticSiteMapItemList />
        <StaticSiteMapItemEditModal />
      </FormPaper>
    </Stack>
  );
};

export default memo(StaticSiteMapItemFormContent);
