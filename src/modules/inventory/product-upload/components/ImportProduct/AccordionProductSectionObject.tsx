import { memo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Stack, styled, Typography } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from '@mui/system';
import { FlexBox } from '@dfl/mui-react-common';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';
import { isEmpty } from 'lodash';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Trans, useTranslation } from 'react-i18next';

type AccordionProductSectionObjectProps = {
  name: string;
  data: any;
  oneItem: string;
  twoItem: string;
};

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));
const AccordionProductSectionObject = ({ name, data, oneItem, twoItem }: AccordionProductSectionObjectProps) => {
  const { t } = useTranslation('productUpload');
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    if (isEmpty(data)) setExpanded(false);
    else {
      setExpanded(!expanded);
    }
  };

  return (
    <Box mt={1} mb={2}>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <FlexBox justifyContent={'space-between'} minWidth={'100%'} maxWidth={'100%'}>
            <Typography>{name}</Typography>
            {!isEmpty(data) ? <ClearIcon sx={{ color: 'red' }} /> : <DoneAllIcon sx={{ color: 'green' }} />}
          </FlexBox>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {data?.map((item: any) => (
              <Stack key={item?.code}>
                <ListItemCustom alignItems='center'>
                  <ListItem key={item?.code} disableGutters>
                    <ListItemText
                      primary={
                        <Trans t={t}>
                          {t(`importProduct.${oneItem}`)}: {item?.code}
                        </Trans>
                      }
                    />
                  </ListItem>
                  <ListItem key={item?.code} disableGutters>
                    <ListItemText
                      primary={
                        <Trans t={t}>
                          {t(`importProduct.${twoItem}`)} : {item?.category || item?.name || item?.provider}
                        </Trans>
                      }
                    />
                  </ListItem>
                </ListItemCustom>
                <Divider />
              </Stack>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default memo(AccordionProductSectionObject);
