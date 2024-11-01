import React, { memo, FC, useEffect } from 'react';
import classnames from 'classnames';
import { Box, Tooltip } from '@mui/material';
import { ChildrenProps, FlexBox, H2, IconButton } from '@dfl/mui-react-common';
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
        <Box>
          {title && (
            <FlexBox gap={1}>
              {linkId && (
                <Tooltip title={t('copyClipboardRoute')}>
                  <IconButton
                    tooltip={t('copy')}
                    onClick={() => {
                      copyTextToClipboard(getAbsoluteRoute(pathname) + `#${linkId}`).then(() =>
                        toast.success(t('linkCopied')),
                      );
                    }}
                  >
                    <LinkIcon sx={{ color: '#707070', minWidth: 12, minHeight: 12 }} />
                  </IconButton>
                </Tooltip>
              )}
              <H2>{title}</H2>
            </FlexBox>
          )}
          {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
        </Box>
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
