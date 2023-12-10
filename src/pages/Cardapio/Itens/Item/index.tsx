import DishTags from 'components/DishTags';
import { MenuItem } from 'types/Dish';
import styles from './Item.module.scss';

export default function Item(props: MenuItem) {
  const { title, description, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishTags {...props} />
      </div>
    </div>
  );
}
