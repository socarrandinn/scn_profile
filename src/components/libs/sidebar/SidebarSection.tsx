import { List, ListSubheader, Theme } from '@mui/material';
import { SidebarItem } from './SidebarItem';
import { IMenu, IMenuItem, IMenuLeaf } from '@dfl/mui-react-common';

const renderNavItems = ({
  depth = 0,
  items,
  path,
}: {
  items: Array<IMenuItem | IMenuLeaf>;
  path: string;
  depth?: number;
}) => (
  <List disablePadding>
    {items.reduce((acc: any[], item: IMenuItem) => reduceChildRoutes({ acc, depth, item, path }), [])}
  </List>
);

const reduceChildRoutes = ({
  acc,
  depth,
  item,
  path,
}: {
  acc: any[];
  item: IMenuItem;
  path: string;
  depth: number;
}) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = item.path ? path.includes(item.path) : false;
  const exactMatch = path.split('?')[0] === item.path; // We don't compare query params

  if (item.children) {
    acc.push(
      <SidebarItem
        active={partialMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        disabled={item.disabled}
        key={key}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          path,
        })}
      </SidebarItem>,
    );
  } else {
    acc.push(
      <SidebarItem
        active={item.partialMatch ? partialMatch : exactMatch}
        chip={item.chip}
        depth={depth}
        disabled={item.disabled}
        icon={item.icon}
        info={item.info}
        key={key}
        path={item.path}
        title={item.title}
      />,
    );
  }

  return acc;
};

type SidebarSectionProps = IMenu & { path: string };

// @ts-ignore
const sectionColor = (theme: Theme) => theme.palette.sidebar.section || 'secondary.400';

export const SidebarSection = (props: SidebarSectionProps) => {
  const { items, path, title, atLessOne, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: sectionColor,
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: 2.5,
            ml: 4,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </ListSubheader>
      }
      {...other}
    >
      {renderNavItems({
        items,
        path,
      })}
    </List>
  );
};
