declare namespace Props {
  export type TabPanel = Readonly<{
    children?: React.ReactNode;
    index: number;
    value: number;
  }>;
}
