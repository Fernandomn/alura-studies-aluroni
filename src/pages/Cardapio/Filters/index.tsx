import options from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

interface IFilter {
  id: number;
  label: string;
}

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  const selectFilter = (option: IFilter) => {
    if (option.id === filter) return setFilter(null);
    return setFilter(option.id);
  };

  return (
    <div className={styles.filtros}>
      {options.map((option) => (
        <button
          key={option.id}
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filter === option.id,
          })}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
