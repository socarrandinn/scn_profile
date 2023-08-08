import { memo } from 'react';
import CategorySummary from 'modules/inventory/settings/category/components/CategorySummary/CategorySummary';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CategoryDetailProvider } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import CategoryChildren from 'modules/inventory/settings/category/components/CategoryDetailsContent/CategoryChildrens';

const CategoryDetailsContainer = () => (
    <CategoryDetailProvider>
        <DetailLayout>
            <DetailSummary>
                <CategorySummary/>
            </DetailSummary>
            <DetailContent ghost>
                <CategoryChildren/>
            </DetailContent>
        </DetailLayout>
    </CategoryDetailProvider>
);

export default memo(CategoryDetailsContainer);
