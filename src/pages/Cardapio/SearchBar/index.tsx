import React from 'react';
import styles from './SearchBar.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
      ></input>
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
