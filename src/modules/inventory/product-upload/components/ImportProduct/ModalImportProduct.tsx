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
        href={'../../../../../product/products.xlsx'}
        download='products.xlsx'
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
  const [data, setData] = useState<any>();
  const { t } = useTranslation('productUpload');
  const [seeError, setSeeError] = useState(true);
  const { setValue, isLoading, reset, control, onSubmit } = useProductImportCreateForm(onClose);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

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
        <ConditionContainer active={!isLoading} alternative={<ImportProductSkeleton />}>
          <Form control={control} isLoading={isLoading} size={'small'} id='product-import' dark onSubmit={onSubmit}>
            <ImportProductFile isImportButton={false} setValue={setValue} setData={setData} />
          </Form>
        </ConditionContainer>
        <ProductImportInfo
          response={data?.summary || {}}
          lastError={data?.productsWithoutCode || 0}
          setSeeError={setSeeError}
          productwithoutNameTotal={data?.productsWithoutName?.length || 0}
          productwithoutProviderTotal={data?.productsWithoutProviders?.length || 0}
          categoriesNoExistTotal={data?.categoriesNoExist?.length || 0}
          seeError={seeError}
        />
        <Grid container direction={'column'} top={'25px'} position={'relative'} display={seeError ? 'none' : ''}>
          <Grid item>
            <AccordionProductSection name={t('importProduct.duplicateCode')} data={data?.duplicatedCodes || []} />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutCategories')}
              data={data?.productsWithoutCategories?.map((a: any) => a.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutPrices')}
              data={data?.productsWithoutPrices?.map((a: any) => a.code) || []}
            />
          </Grid>

          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productwithoutProvider')}
              data={data?.productsWithoutProviders?.map((a: any) => a.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productwithoutBrand')}
              data={data?.productsWithoutBrand?.map((a: any) => a.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productwithoutName')}
              data={data?.productsWithoutName?.map((a: any) => a.code) || []}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.nonExistingCategory')}
              data={data?.categoriesNoExist || []}
              twoItem={'category'}
              oneItem={'code'}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.nonExistingProvider')}
              data={data?.providersNoExist || []}
              oneItem={'code'}
              twoItem={'provider'}
            />
          </Grid>
          <Grid item>
            <AccordionProductSectionObject
              name={t('importProduct.duplicateName')}
              data={data?.duplicatedNames || []}
              oneItem={'code'}
              twoItem={'name'}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={data?.summary?.totalError !== 0}
          form='product-import'
        >
          {t('send')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ModalImportProduct);
