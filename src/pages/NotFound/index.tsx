import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import themeStyles from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [themeStyles.container]: true,
      })}
    >
      <NotFoundImage />
    </div>
  );
}
