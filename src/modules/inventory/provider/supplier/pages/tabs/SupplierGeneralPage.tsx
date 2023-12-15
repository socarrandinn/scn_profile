import { PagePaperLayout } from 'layouts/index';
import { memo } from 'react';

type SupplierGeneralPageProps = {
  tab: string;
};

const SupplierGeneralPage = ({ tab }: SupplierGeneralPageProps) => {
  return (
    <PagePaperLayout m={0}>
      Tabs: {tab}
    </PagePaperLayout>
  )
};

export default memo(SupplierGeneralPage);
