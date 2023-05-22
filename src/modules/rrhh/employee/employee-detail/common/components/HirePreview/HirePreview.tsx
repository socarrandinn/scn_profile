import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';
import DetailSectionTitle from 'modules/common/components/Titles/DetailSectionTitle';
import { HiringInfo } from 'modules/rrhh/employee/common/interfaces/hiring-info';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { Box, Typography } from '@mui/material';

type HirePreviewProps = {
  hiring?: HiringInfo
}

const HirePreview = ({ hiring }: HirePreviewProps) => {
  const { t } = useTranslation('employee');
  return (
        <Box>
            <DetailSectionTitle>
                {t('section.job.title')}
            </DetailSectionTitle>
            <FlexBox gap={2}>
                <Typography>
                    <DateValue value={hiring?.date}/>.
                </Typography>
                <Typography color={'text.secondary'}>
                    <DateValue value={hiring?.date} fromNow/>
                </Typography>
            </FlexBox>
        </Box>
  );
}

export default memo(HirePreview);
