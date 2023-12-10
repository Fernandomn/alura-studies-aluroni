import DishTags from 'components/DishTags';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from '../../data/cardapio.json';
import styles from './Dish.module.scss';

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dish = cardapio.find((item) => item.id === Number(id));

  if (!dish) return '';
  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>

      <section className={styles.container}>
        <h1 className={styles.titulo}>{dish.title}</h1>

        <div className={styles.imagem}>
          <img src={dish.photo} alt={dish.title} />
        </div>

        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{dish.description}</p>

          <DishTags {...dish} />
        </div>
      </section>
    </>
  );
}
