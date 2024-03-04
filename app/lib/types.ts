export type OptionItem<T extends string> = {
  value: T;
  label: string;
};

export type SearchFilter = {
  placeholder: string;
  columnKey: string;
};

export type TabItem = {
  href: string;
  label: string;
  value: string;
};
