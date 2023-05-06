import React, { memo } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Crumb from 'components/libs/DynamicBreadcrumbs/Crumb';
import { IBreadcrumb, useBreadcrumbs } from 'contexts/DynamicBreadcrumb';

function DynamicBreadcrumbs () {
  const { breadcrumbs } = useBreadcrumbs();

  return (
      /* The old breadcrumb ending with '/>' was converted into this */
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb: IBreadcrumb, idx) => (
            // @ts-ignore
            <Crumb {...crumb} key={`${crumb?.href || 'link'}-${crumb?.text || 'text'}-${idx}`} last={idx === breadcrumbs.length - 1} />
        ))}
      </Breadcrumbs>
  );
}

export default memo(DynamicBreadcrumbs)
