import React, { memo, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { FolderOpenOutlined, FolderOutlined } from '@mui/icons-material';
import { FileCodeProps } from './FilesCodeView';
import { StyledTreeItem } from './styled';
import ArticleIcon from '@mui/icons-material/Article';
import { TreeView } from '@mui/lab';
import { useSelectedCodeFile } from 'contexts/SelectedCodeFileProvider';

type Props = {
  code?: FileCodeProps[];
};

function buildTree(paths: string[]) {
  const tree = {};
  paths.forEach((path) => {
    let currentLevel: any = tree;
    const parts = path.split('/');
    parts.forEach((part: string) => {
      if (!(part in currentLevel)) {
        currentLevel[part] = {};
      }

      currentLevel = currentLevel[part];
    });
  });

  return tree;
}

const FilesTreeView = ({ code }: Props) => {
  const { path, setPath } = useSelectedCodeFile();

  const tree = useMemo(() => buildTree((code || []).map((code) => code.path || '')), []);

  const expandedNodes = useMemo(() => {
    const result: string[] = [];
    if (path) {
      const parts = path.split('/');
      parts.forEach((part) => {
        if (part) {
          if (result.length === 0) {
            result.push(`/${part}`);
          } else {
            result.push(`${result[result.length - 1]}/${part}`);
          }
        }
      });
    }
    return result;
  }, [path]);

  const [expanded, setExpanded] = useState(expandedNodes);
  const [selected, setSelected] = useState(path);

  useEffect(() => {
    setExpanded(expandedNodes);
  }, [expandedNodes, setExpanded]);
  useEffect(() => {
    setSelected(path);
  }, [path, setSelected]);

  const handleToggle = useCallback((event: SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  }, []);

  const handleSelect = useCallback((event: SyntheticEvent, nodeId: string) => {
    setSelected(nodeId);
  }, []);

  const renderTree = useCallback((node: any, prefix: string = '', label: string = ''): any => {
    if (Object.keys(node || {}).length > 0) {
      if (prefix && label) {
        return (
          <StyledTreeItem key={prefix || label} nodeId={prefix} labelText={label}>
            {Object.entries(node).map(
              /* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */
              (child: [string, any]) => renderTree(child[1], prefix.toString() + '/' + (child[0] || ''), child[0]),
            )}
          </StyledTreeItem>
        );
      }
      return (
        <>
          {Object.entries(node).map(
            /* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */
            (child: [string, any]) =>
              renderTree(child[1], child[0] ? prefix.toString() + '/' + child[0] : prefix, child[0]),
          )}
        </>
      );
    }
    return (
      <StyledTreeItem
        key={prefix || label}
        nodeId={prefix}
        labelIcon={ArticleIcon}
        labelText={label}
        onClick={() => {
          setPath(prefix);
        }}
      />
    );
  }, []);

  return (
    <TreeView
      defaultCollapseIcon={<FolderOutlined />}
      defaultExpandIcon={<FolderOpenOutlined />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      expanded={expanded}
      selected={selected}
      sx={{ height: '100%', flexGrow: 1, maxWidth: '30%', overflowY: 'auto' }}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {renderTree(tree)}
    </TreeView>
  );
};

FilesTreeView.defaultProps = {};

export default memo(FilesTreeView);
