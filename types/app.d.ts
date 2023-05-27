type TAny = ReturnType<JSON.values>;

interface ISvgComponentProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  viewBox?: string;
  opacity?: string | number;
  className?: string;
}

interface IComponent<T = {}> extends React.FC<React.PropsWithChildren<T>> {}
interface ISvgComponent<T = {}> extends IComponent<ISvgComponentProps & T> {}

type TNextPage = import('next').NextPage<{ params: { lang: string } }>;
