import { useState } from 'react';
import themeStyles from 'styles/Theme.module.scss';
import { SorterOptions } from 'types/sort';
import styles from './Cardapio.module.scss';
import Filters from './Filters';
import Itens from './Itens';
import SearchBar from './SearchBar';
import Sorter from './Sorter';

export default function Cardapio() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<SorterOptions>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={themeStyles.titulo}>Cardápio</h3>

      <SearchBar search={search} setSearch={setSearch} />

      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />

        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>

      <Itens search={search} filter={filter} sorter={sorter} />
    </section>
  );
}
