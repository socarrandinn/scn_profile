/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/24/23
 */
import React, { memo, useMemo } from 'react';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import { IContactEmail, IContactPhone } from 'modules/common/interfaces';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { formatDistance, subDays } from 'date-fns';

interface ContactsProps {
  employee: IEmployee;
}

const Contacts = ({ employee }: ContactsProps) => {
  const { t } = useTranslation(['phoneTypes', 'employee']);

  const getPhones = useMemo(() => {
    return employee?.contacts?.phones?.map((phone) => phone);
  }, [employee?.contacts?.phones]);

  const getEmails = useMemo(() => {
    return employee?.contacts?.emails?.map((email) => email);
  }, [employee?.contacts?.emails]);

  return (
    <>
      <FormPaper nm title={t('employee:section.contact.title')} sx={{ padding: 0, boxShadow: 'none' }}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant={'body1'} color='#8f8f8f'>
            {t('employee:fields.contacts.phones')}:
          </Typography>
          {getPhones?.map((phone: IContactPhone, idx: number) => {
            return (
              <FlexBox key={idx} sx={{ gap: 1 }}>
                <Typography variant={'body1'} color='#8f8f8f'>
                  {t(phone?.label)}:
                </Typography>
                <Typography variant={'body1'}>{phone?.value}</Typography>
              </FlexBox>
            );
          })}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant={'body1'} color='#8f8f8f'>
            {t('employee:fields.contacts.emails')}:
          </Typography>
          {getEmails?.map((phone: IContactEmail, idx: number) => {
            return (
              <FlexBox key={idx} sx={{ gap: 1 }}>
                <Typography variant={'body1'} color='#8f8f8f'>
                  {t(phone?.label)}:
                </Typography>
                <Typography variant={'body1'}>{phone?.value}</Typography>
              </FlexBox>
            );
          })}
        </Box>
      </FormPaper>

      <Divider />

      <FormPaper nm title={t('employee:fields.hiring.date')} sx={{ padding: 0, boxShadow: 'none', margin: '1rem 0' }}>
        <Typography variant={'body1'} color='#8f8f8f'>
          {formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })}
        </Typography>
      </FormPaper>

      <Divider />

      <FormPaper nm title={t('employee:manager')} sx={{ padding: 0, boxShadow: 'none', margin: '1rem 0' }}>
        <FlexBox sx={{ gap: 1 }}>
          <Avatar>H</Avatar>
          <Box>
            <Typography variant={'body1'} color='#8f8f8f'>
              Liam Reynolt
            </Typography>
            <Typography variant={'body1'} color='#8f8f8f'>
              HR Director
            </Typography>
          </Box>
        </FlexBox>
      </FormPaper>
    </>
  );
};

export default memo(Contacts);
