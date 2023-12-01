import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  let recomendedDishes = [...cardapio];
  recomendedDishes = recomendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>

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
    </section>
  );
}