import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageDetails } from '../../context/PageDetailsContext';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import SeoPreview from 'components/SeoPreview/SeoPreview';
import { useToggle } from '@dfl/hook-utils';
import SeoFormContainer from 'modules/common/containers/SeoFormContainer';
import { urlBase } from 'modules/common/components/SeoForm/SeoForm';
import { ConditionContainer, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import usePageUpdate from '../../hooks/usePageUpdate';
import { seoSchema } from '../../schemas/page.schema';
import { Button, Stack } from '@mui/material';

const PageSeo = () => {
  const { t } = useTranslation('product');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isLoading, page } = usePageDetails();

  const initValues = useMemo(() => ({
    seo: page?.seo,
    slug: page?.slug,
    _id: page?._id
  }), [page?._id, page?.slug, page?.seo]);

  const { control, onSubmit, isLoading: isLoadingForm, error: errorForm, reset, seoTitle, seoDescription, slug, formState } =
    usePageUpdate(initValues, seoSchema, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  if (isOpen) {
    return (
      <FormPaper
        nm
        variant={{ title: 'h4' }}
        title={t('section.seo.title')}
        actions={<FormPaperAction onToggle={handleClose} open={isOpen} />}
      >
        <SeoFormContainer
          error={errorForm}
          isLoading={isLoadingForm}
          control={control}
          onSubmit={onSubmit}
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          slugDescription={slug}
        />
        <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
          <Button variant='grey' onClick={handleClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton
            variant='contained'
            type={'submit'}
            loading={isLoading}
            disabled={!formState?.isDirty}
            form='form'
          >
            {t('common:save')}
          </LoadingButton>
        </Stack>
      </FormPaper>
    )
  }

  return (
    <FormPaper
      nm
      variant={{ title: 'h4' }}
      title={t('section.seo.title')}
      actions={<FormPaperAction onToggle={onOpen} open={isOpen} />}
    >
      <ConditionContainer active={!isLoading} alternative={<SkeletonForm numberItemsToShow={3} />}>
        <SeoPreview
          title={page?.seo?.name}
          description={page?.seo?.description}
          urlSlug={`${urlBase}${page?.slug as string}`}
          image={page?.seo?.image}
        />
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(PageSeo);
