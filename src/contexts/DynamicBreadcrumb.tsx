import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';

export interface IBreadcrumb {
  label?: string;
  url?: string;
  href?: string;
}

interface BreadcrumbsContextType {
  breadcrumbs: IBreadcrumb[];
  setBreadcrumbs: (val: IBreadcrumb[]) => void;
  flag: boolean;
  setFlag: (val: boolean) => void;
  generateBreadcrumbs: (paramKey?: string, entityName?: string, loading?: boolean) => void;
}

interface BreadcrumbsProviderProps {
  children: any;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
  breadcrumbs: [],
  setBreadcrumbs: () => null,
  flag: false,
  setFlag: () => null,
  generateBreadcrumbs: () => null,
});

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr: string) => {
  const pathWithoutQuery = pathStr.split('?')[0];
  return pathWithoutQuery.split('/')
    .filter(v => v.length > 0);
}

export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const { t } = useTranslation('breadcrumb');

  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);
  const [flag, setFlag] = useState<boolean>(false);

  // Gives us ability to load the current route details
  const { pathname } = useLocation();
  const params = useParams();

  // Either lookup a nice label for the subPath
  const getDefaultTextGenerator = useCallback((subPath: string, href: string) => {
    return {
      [subPath]: t(subPath),
    }[subPath] || t(subPath);
  }, [t]);

  // Assuming `fetchAPI` loads data from the API and this will use the
  // parameter name to determine how to resolve the text. In the example,
  // we fetch the post from the API and return it's `title` property
  const getTextGenerator = useCallback((param: string, query: any) => {
    return {
      id: 'id',
    }[param];
  }, []);

  const generateBreadcrumbs = useCallback((paramKey?: string, entityName?: string, loading?: boolean) => {
    const asPathNestedRoutes = generatePathParts(pathname);
    const pathnameNestedRoutes = generatePathParts(pathname);

    const crumbList = asPathNestedRoutes.map((subPath: string, idx: number) => {
      const param = pathnameNestedRoutes[idx].replace('[', '').replace(']', '');
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

      return {
        href,
        textGenerator: getTextGenerator(param, params),
        text: paramKey === getDefaultTextGenerator(subPath, href) ? entityName : getDefaultTextGenerator(subPath, href),
        loading: paramKey === getDefaultTextGenerator(subPath, href) ? loading : false
      };
    });

    setBreadcrumbs([...crumbList])
  }, [getTextGenerator, getDefaultTextGenerator, pathname]);

  useEffect(() => {
    if (!flag) generateBreadcrumbs()
  }, [flag, generateBreadcrumbs]);

  return (
        <BreadcrumbsContext.Provider value={{
          breadcrumbs,
          setBreadcrumbs,
          flag,
          setFlag,
          generateBreadcrumbs,
        }}>
            {children}
        </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbsContext);
  if (context === undefined) {
    throw new Error('useBreadcrumbs require BreadcrumbsContextProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export const useBreadcrumbName = (paramKey?: string, entityName?: string, loading?: boolean) => {
  const { generateBreadcrumbs, flag, setFlag } = useBreadcrumbs();

  useEffect(() => {
    if (paramKey && entityName) {
      setFlag(true);
      generateBreadcrumbs(paramKey, entityName, loading);
    }
    return () => {
      setFlag(false);
    }
  }, [paramKey, entityName, loading, generateBreadcrumbs, flag]);
}
