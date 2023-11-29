import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
  const routes = [
    { label: 'Início', to: '/' },
    { label: 'Cardápio', to: '/cardapio' },
    { label: 'Sobre', to: '/sobre' },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={route.to}>{route.label} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
