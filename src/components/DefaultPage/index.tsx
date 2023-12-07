import { Outlet } from 'react-router-dom';
import themeStyles from 'styles/Theme.module.scss';
import styles from './DefaultPage.module.scss';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A Casa do Código e da Massa</div>
      </header>

      <div className={themeStyles.container}>
        <Outlet />
      </div>
    </>
  );
}
