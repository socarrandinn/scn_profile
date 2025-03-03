import { memo, useEffect } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import { DialogForm, Form } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { BannerFileForm } from 'modules/cms/banners/components/BannerFileForm';
import { FormBannerTypeSelect } from 'modules/cms/collections/components/Fields/FormBannerTypeSelect';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import useBannerSizeOptionContext from 'modules/cms/banners/context/useBannerSizeOptionContext';
import { MultiBannerSize } from 'modules/cms/banners/constants/banner.sizes';
import { FormBannerPositionSelect } from 'modules/cms/collections/components/Fields/FormBannerPositionSelect';

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

interface FormProps {
  image: string[];
  bannerType: COLLECTION_BANNER_TYPE;
  position: keyof MultiBannerSize;
}
const initValue: FormProps = {
  image: [],
  bannerType: COLLECTION_BANNER_TYPE.SIMPLE_BANNER,
  position: 'BANNER_0',
};
const MediaCreateModal = ({ onClose, open }: Props) => {
  const { t } = useTranslation('media');
  const { control, watch } = useForm({
    defaultValues: initValue,
  });

  const bannerType = watch('bannerType');
  const position = watch('position');

  const isHabilite = [
    bannerType === COLLECTION_BANNER_TYPE.SIMPLE_BANNER,
    bannerType === COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER && !!position,
    bannerType === COLLECTION_BANNER_TYPE.MULTI_BANNER && !!position,
  ].some(Boolean);

  const { imageOption, setBannerImageOption } = useBannerSizeOptionContext();

  useEffect(() => {
    setBannerImageOption?.(bannerType, position);
  }, [bannerType, position, setBannerImageOption]);

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      title={t('create')}
      aria-labelledby={'media-creation-title'}
      maxWidth={'md'}
    >
      <DialogContent>
        <Form id='media-image' control={control} dark>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormBannerTypeSelect name='bannerType' label={t('collection:fields.type')} />
            </Grid>
            <Grid item xs={12} md={6}>
              {bannerType && bannerType === COLLECTION_BANNER_TYPE.MULTI_BANNER && (
                <FormBannerPositionSelect
                  name='position'
                  bannerType={bannerType}
                  label={t('collection:fields.position')}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <BannerFileForm
                view={'desktop'}
                control={control}
                error={null}
                isLoading={false}
                maxFiles={5}
                disabled={!isHabilite}
                imageOption={imageOption}
              />
            </Grid>
          </Grid>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {t('common:cancel')}
        </Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(MediaCreateModal);
