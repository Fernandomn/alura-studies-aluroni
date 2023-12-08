import imgNossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import themeStyles from 'styles/Theme.module.scss';
import { MenuItem } from 'types/Dish';
import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  const navigate = useNavigate();

  let recomendedDishes = [...cardapio];
  recomendedDishes = recomendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const redirectToDetails = (dish: MenuItem) => {
    console.log('hi');
    navigate(`/prato/${dish.id}`, { state: { ...dish } });
  };

  return (
    <section>
      <h3 className={themeStyles.titulo}>Recomendações da cozinha</h3>

      <div className={styles.recomendados}>
        {recomendedDishes.map((item: MenuItem) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button
              className={styles.recomendado__botao}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={themeStyles.titulo}>Nossa casa</h3>

      <div className={styles.nossaCasa}>
        <img src={imgNossaCasa} alt="Casa do Aluroni" />

        <div className={styles.nossaCasa__endereco}>
          <p>Rua Vergueiro, 3185</p>

          <p>Vila Mariana - SP</p>
        </div>
      </div>
    </section>
  );
}
