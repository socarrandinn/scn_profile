import { memo, useCallback, useMemo, useState } from 'react';
import { Button, DialogActions, DialogContent, Grid, Typography } from '@mui/material';
import ImportProductFile from './ProductImportFileSection';
import { DialogForm, FlexBox } from '@dfl/mui-react-common';
import AccordionProductSection from './AccordionProductSection';
import ProductImportInfo from './ImportarProductAlert';
import AccordionProductSectionObject from './AccordionProductSectionObject';
import { useTranslation } from 'react-i18next';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { HandleErrorProductImport } from '../HandleErrorProductImport';
import HandleImportError from 'modules/inventory/product-stock/components/HandleImportError/HandleImportError';
import { useToggle } from '@dfl/hook-utils';

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
  const { isOpen: seeError, onOpen: onSeeError, onToggle: toggleSeeError } = useToggle(true);

  const _error = useMemo(() => {
    if (data?.message) {
      return {
        reference: 'SE001',
        message: data?.message,
      };
    }
    return null;
  }, [data?.message]);

  const onModalClose = useCallback(() => {
    onClose?.();
    // reset();
    setData(undefined);
    onSeeError();
  }, [onClose, onSeeError, setData]);

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
      // isLoading={isLoading}
      title={<HeaderModal />}
      maxWidth={'md'}
      aria-labelledby={'email-creation-title'}
    >
      <DialogContent>
        <HandleImportError error={_error} onClick={toggleSeeError} />
        {data?.dataError && <HandleErrorProductImport errors={data?.dataError} />}
        <ImportProductFile isImportButton={false} setData={setData} />

        <ProductImportInfo
          response={data?.dataError ? data : data?.summary || {}}
          lastError={data?.productsWithoutCode || 0}
          toggleSeeError={toggleSeeError}
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
            <AccordionProductSectionObject
              name={t('importProduct.duplicateName')}
              data={data?.details?.duplicatedNames || []}
              oneItem={'code'}
              twoItem={'name'}
            />
          </Grid>

          <Grid item>
            <AccordionProductSection
              name={t('importProduct.productsWithoutManufacturer')}
              data={data?.details?.productsWithoutManufacturer?.map((a: any) => a?.code) || []}
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
              name={t('importProduct.suppliersNoExist')}
              data={data?.details?.suppliersNoExist || []}
              oneItem={'code'}
              twoItem={'provider'}
            />
            {/* <Grid item>
              <AccordionProductSectionObject
                name={t('importProduct.manufacturerNoExist')}
                data={data?.details?.manufacturerNoExist || []}
                twoItem={'manufacturer'}
                oneItem={'code'}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onModalClose}>
          {t('cancel')}
        </Button>

        {/* <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={data?.error !== 0}
          form='product-import'
        >
          {t('send')}
        </LoadingButton> */}
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ModalImportProduct);
