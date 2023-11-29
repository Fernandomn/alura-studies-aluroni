import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import styles from './Sorter.module.scss';
import options from '../../../data/options.json';
import { SorterOptions } from 'types/sort';

interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<SorterOptions>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [open, setOpen] = useState(false);
  const sorterName =
    sorter && options.find((option) => option.value === sorter)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: sorter !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sorterName || 'Ordenar Por:'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}

      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.ordenador__option}
            key={option.value}
            onClick={() => setSorter(option.value as SorterOptions)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
