import { cx } from '@utils/tools';

import styles from './styles.module.scss';

export const TemplateComponent: IComponent<{
  text: string;
  className?: string;
}> = ({ className = 'text-black', text }) => {
  return <h1 className={cx(styles.text, className)}>{text}</h1>;
};
