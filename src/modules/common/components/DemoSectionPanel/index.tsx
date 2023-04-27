import React, { memo, FC, useEffect } from 'react';
import classnames from 'classnames';
import { Box, IconButton, Tooltip } from '@mui/material';
import { ChildrenProps, FlexBox, H2 } from '@dfl/mui-react-common';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import { copyTextToClipboard, getAbsoluteRoute } from 'utils/index';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

type Props = ChildrenProps & {
  className?: string;
  title?: string;
  description?: string;
  linkId?: string;
};

const DemoSectionPanel: FC<Props> = ({ className, title, description, linkId, children }) => {
  const { t } = useTranslation('common');

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (linkId && `#${linkId}` === hash) {
      setTimeout(() => {
        document?.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [linkId, hash]);

  return (
    <Box className={classnames('relative', className)} id={linkId}>
      {(title || description) && (
        <FlexBox gap={2} alignItems={'center'}>
          {linkId && (
            <Tooltip title={t('copyClipboardRoute')}>
              <IconButton
                onClick={() => {
                  copyTextToClipboard(getAbsoluteRoute(pathname) + `#${linkId}`).then(() =>
                    toast.success(t('linkCopied')),
                  );
                }}
              >
                <LinkIcon sx={{ color: '#707070', minWidth: 36, minHeight: 36 }} />
              </IconButton>
            </Tooltip>
          )}
          <Box>
            {title && <H2>{title}</H2>}
            {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
          </Box>
        </FlexBox>
      )}
      {children}
    </Box>
  );
};

DemoSectionPanel.defaultProps = {
  className: '',
  title: undefined,
  description: undefined,
};

export default memo(DemoSectionPanel);
