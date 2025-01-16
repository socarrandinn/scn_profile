import { memo } from 'react';
import { ConditionContainer, Form, PageLoader } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import CollectionBannerContentContainer from '../../containers/CollectionBannerContentContainer';
import BannerFormAction from '../BannerFormAction/BannerFormAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { BannerFormPaperTitle } from '../BannerFormPaperTitle';
import useBannerCreateForm from '../../hooks/useBannerCreateForm';
import { BannerCommonForm } from '../BannerCommonForm';

const CollectionBannerDetailsContent = () => {
  const { isLoading } = useCollectionDetails();
  const { control, onSubmit, error, isLoading: isBannerLoading } = useBannerCreateForm();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'collection-banner-form'}>
        <DetailLayout>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <CollectionBannerContentContainer />
          </DetailContent>
          <DetailSummary ghost width={{ md: 320, lg: 380, xl: 450 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={<BannerFormPaperTitle title='Banner Agro' />}>
              <BannerCommonForm error={error} />
              <BannerFormAction isLoading={isBannerLoading} />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </ConditionContainer>
  );
};

export default memo(CollectionBannerDetailsContent);
