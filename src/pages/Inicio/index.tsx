import themeStyles from 'styles/Theme.module.scss';
import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import imgNossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
  let recomendedDishes = [...cardapio];
  recomendedDishes = recomendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={themeStyles.titulo}>Recomendações da cozinha</h3>

      <div className={styles.recomendados}>
        {recomendedDishes.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recomendado__botao}>Ver mais</button>
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
