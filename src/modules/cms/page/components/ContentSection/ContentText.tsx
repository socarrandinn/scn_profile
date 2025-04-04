import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageDetails } from '../../context/PageDetailsContext';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { useToggle } from '@dfl/hook-utils';
import { ConditionContainer, SkeletonForm } from '@dfl/mui-react-common';
import { contentSchema } from '../../schemas/page.schema';
import ContentForm from './ContentForm';
import { HtmlText } from 'components/HtmlText';
import usePageUpdate from '../../hooks/usePageUpdate';

const ContentText = () => {
  const { t } = useTranslation('page');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { page, isLoading } = usePageDetails();

  const initValues = useMemo(() => ({
    content: page?.content,
    _id: page?._id
  }), [page?._id, page?.content]);

  const { control, onSubmit, isLoading: isLoadingForm, error, reset, formState } = usePageUpdate(initValues, contentSchema, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  if (isOpen) {
    return (
      <FormPaper
        nm
        variant={{ title: 'h4' }}
        title={t('fields.content')}
        actions={<FormPaperAction onToggle={handleClose} open={isOpen} />}
      >
        <ContentForm
          onClose={handleClose}
          error={error}
          isLoading={isLoadingForm}
          control={control}
          formState={formState}
          onSubmit={onSubmit}
        />
      </FormPaper>
    )
  };

  return (
    <FormPaper
      nm
      variant={{ title: 'h4' }}
      title={t('fields.content')}
      actions={<FormPaperAction onToggle={onOpen} open={isOpen} />}
    >
      <ConditionContainer active={!isLoading} alternative={<SkeletonForm numberItemsToShow={2} />}>
        {page?.content && <HtmlText text={page?.content} />}
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(ContentText);
