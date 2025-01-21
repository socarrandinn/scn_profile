import { memo, useCallback, useState } from 'react';
import { Button, DialogActions, DialogContent, Grid, Typography } from '@mui/material';
import ImportProductFile from './ProductImportFileSection';
import { ConditionContainer, DialogForm, FlexBox, Form } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import AccordionProductSection from './AccordionProductSection';
import ProductImportInfo from './ImportarProductAlert';
import AccordionProductSectionObject from './AccordionProductSectionObject';
import { useTranslation } from 'react-i18next';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useProductImportCreateForm from '../../hooks/useProductImportCreateForm';
import ImportProductSkeleton from './ImportProductSkeleton';
import { HandleErrorProductImport } from '../HandleErrorProductImport';

type ModalImportProductProps = {
  isOpen: boolean;
  onClose: any;
};

const HeaderModal = () => {
  const { t } = useTranslation('productUpload');
  return (
    <FlexBox
      maxWidth={'97%'}
      width={'97%'}
      justifyContent={'space-between'}
      alignItems={{ xs: 'flex-start' }}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Typography>{t('title')}</Typography>
      <Button
        href={'../../../../../product/product-template.xlsx'}
        download='product-template.xlsx'
        target='_blank'
        variant='text'
        startIcon={<FileDownloadIcon />}
      >
        {t('export')}
      </Button>
    </FlexBox>
  );
};

const ModalImportProduct = ({ isOpen, onClose }: ModalImportProductProps) => {
  const [data, setData] = useState<any>(undefined);
  const { t } = useTranslation('productUpload');
  const [seeError, setSeeError] = useState(true);
  const { setValue, isLoading, reset, control, onSubmit } = useProductImportCreateForm(onClose);

  const onModalClose = useCallback(() => {
    onClose?.();
    reset();
    setData(undefined);
    setSeeError(true);
  }, [onClose, reset, setSeeError, setData]);

  const handleClose = useCallback(
    (_: unknown, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason === 'backdropClick') {
        return;
      }
      onModalClose();
    },
    [onModalClose],
  );

  return (
    <DialogForm
      open={isOpen}
      onClose={handleClose}
      isLoading={isLoading}
      title={<HeaderModal />}
      maxWidth={'md'}
      aria-labelledby={'email-creation-title'}
    >
      <DialogContent>
        {data?.dataError && <HandleErrorProductImport errors={data?.dataError} />}
        <ConditionContainer active={!isLoading} alternative={<ImportProductSkeleton />}>
          <Form control={control} isLoading={isLoading} size={'small'} id='product-import' dark onSubmit={onSubmit}>
            <ImportProductFile isImportButton={false} setValue={setValue} setData={setData} />
          </Form>
        </ConditionContainer>
        <ProductImportInfo
          response={data?.dataError ? data : data?.summary || {}}
          lastError={data?.productsWithoutCode || 0}
          setSeeError={setSeeError}
          productsWithoutNameTotal={data?.details?.productsWithoutName?.length || 0}
          productsWithoutProvidersTotal={data?.details?.productsWithoutProviders?.length || 0}
          categoriesNoExistTotal={data?.details?.categoriesNoExist?.length || 0}
          seeError={seeError}
        />
        <Grid container direction={'column'} top={'25px'} position={'relative'} display={seeError ? 'none' : ''}>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.duplicateCode')}
              data={data?.details?.duplicatedCodes?.map((a: any) => a?.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutCategories')}
              data={data?.details?.productsWithoutCategories?.map((a: any) => a?.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutPrices')}
              data={data?.details?.productsWithoutPrices?.map((a: any) => a?.code) || []}
            />
          </Grid>

          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutProvider')}
              data={data?.details?.productsWithoutProviders?.map((a: any) => a?.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutBrand')}
              data={data?.details?.productsWithoutBrand?.map((a: any) => a?.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutName')}
              data={data?.details?.productsWithoutName?.map((a: any) => a?.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.nonExistingCategory')}
              data={data?.details?.categoriesNoExist || []}
              twoItem={'category'}
              oneItem={'code'}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.manufacturerNoExist')}
              data={data?.details?.manufacturerNoExist || []}
              twoItem={'manufacturer'}
              oneItem={'code'}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.suppliersNoExist')}
              data={data?.details?.suppliersNoExist || []}
              oneItem={'code'}
              twoItem={'provider'}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.duplicateName')}
              data={data?.details?.duplicatedNames || []}
              oneItem={'code'}
              twoItem={'name'}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onModalClose}>{t('cancel')}</Button>

        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={data?.summary?.error !== 0}
          form='product-import'
        >
          {t('send')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ModalImportProduct);
