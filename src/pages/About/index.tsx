import styles from './About.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import imgCasa from 'assets/sobre/casa.png';
import imgMassa1 from 'assets/sobre/massa1.png';
import imgMassa2 from 'assets/sobre/massa2.png';

const imagesList = [imgMassa1, imgMassa2];

export default function About() {
  return (
    <section>
      <h3 className={themeStyles.titulo}>Sobre</h3>

      <div className={styles.sobreNos}>
        <img src={imgCasa} alt="Casa Aluroni" />

        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>

      <div className={styles.imagens}>
        {imagesList.map((image, index) => (
          <div className={styles.imagens__imagem} key={index}>
            <img src={image} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
