import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { EmptyListComponent } from 'components/EmptyListComponent';
import { ReactComponent as EmptyListImage } from '../../assets/images/ilustrations/empty-list-image.svg';

const EmptyListPage = () => {
  return (
    <PagePaperLayout>
      <EmptyListComponent
        image={<EmptyListImage />}
        title='Aún no tienes ofertas'
        description='No pierdas la oportunidad de publicar las ofertas de trabajo para captar a futuros trabajadores . ¿Qué esperas?'
        textButton='Añadir oferta'
      />
    </PagePaperLayout >
  );
};

export default memo(EmptyListPage);
