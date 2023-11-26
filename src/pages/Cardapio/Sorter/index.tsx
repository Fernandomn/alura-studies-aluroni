import styles from "./Sorter.module.scss";
import options from "./options.json";
export default function Sorter() {
  return (
    <button className={styles.ordenador}>
      <span>Ordenar por:</span>

      <div className={styles.ordenador__options}>
        {options.map((option) => (
          <div className={styles.ordenador__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
