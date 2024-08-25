export interface TMeta {
  action?: string;
  resource?: string;
  layout?: string;
  publicRoute?: boolean;
  restricted?: boolean;
  appLayout?: boolean;
  breadcrumb?: { label: string; url: string }[];
  className?: string;
}

export interface TCommonRoutesProps {
  path: string;
  element: JSX.Element;
  layout?: string;
  meta?: TMeta;
  children?: TCommonRoutesProps[];
}
export type TPagination = {
  count: number;
  next: null | string;
  previous: null | string;
};
