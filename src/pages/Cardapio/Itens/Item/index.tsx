import DishTags from 'components/DishTags';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'types/Dish';
import styles from './Item.module.scss';

export default function Item(props: MenuItem) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
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
