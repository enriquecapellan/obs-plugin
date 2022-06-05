interface ITabProps {
  items: ITabItem[];
}

interface ITabItem {
  title: string;
  content: string | JSX.Element;
}
