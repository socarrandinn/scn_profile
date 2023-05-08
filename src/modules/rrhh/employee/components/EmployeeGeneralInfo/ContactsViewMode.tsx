/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/25/23
 */
import React, { memo, useMemo } from 'react';
import DetailList from 'components/DetailList';
import { useTranslation } from 'react-i18next';
import { IEmployeeContactInfo } from 'modules/rrhh/employee/interfaces';
import { Stack, Typography } from '@mui/material';
import { IContactEmail, IContactPhone } from 'modules/common/interfaces';
import { FlexBox } from '@dfl/mui-react-common';

interface ViewModeProps {
  data?: IEmployeeContactInfo;
}

interface PhonesProps {
  data?: IContactPhone[];
}

interface EmailsProps {
  data?: IContactEmail[];
}

const Phones = ({ data }: PhonesProps) => {
  const { t } = useTranslation(['phoneTypes', 'employee']);
  return (
    <Stack direction='column' spacing={1}>
      {data?.map((item, idx: number) => (
        <FlexBox key={idx} sx={{ gap: 1 }}>
          <Typography variant={'body1'} color='#8f8f8f'>
            {t(item?.label)}:
          </Typography>
          <Typography variant={'body1'}>{item?.value}</Typography>
        </FlexBox>
      ))}
    </Stack>
  );
};

const Emails = ({ data }: EmailsProps) => {
  const { t } = useTranslation(['phoneTypes', 'employee']);
  return (
    <Stack direction='column' spacing={1}>
      {data?.map((item, idx: number) => (
        <FlexBox key={idx} sx={{ gap: 1 }}>
          <Typography variant={'body1'} color='#8f8f8f'>
            {t(item?.label)}:
          </Typography>
          <Typography variant={'body1'}>{item?.value}</Typography>
        </FlexBox>
      ))}
    </Stack>
  );
};

const ContactsViewMode = ({ data }: ViewModeProps) => {
  const { t } = useTranslation('employee');

  const phonesData = useMemo(() => {
    const keys = data ? Object.keys(data) : [];
    const values = data ? Object.values(data) : [];

    return (
      keys.map((key, index) => {
        if (key === 'phones') {
          return {
            key,
            label: t(`fields.contacts.${key}`),
            value: <Phones data={values[index]} />,
          };
        }
        if (key === 'emails') {
          return {
            key,
            label: t(`fields.contacts.${key}`),
            value: <Emails data={values[index]} />,
          };
        }
        return [];
      }) || []
    );
  }, [t, data]);

  return (
    // @ts-ignore
    <DetailList data={phonesData} />
  );
};

export default memo(ContactsViewMode);
