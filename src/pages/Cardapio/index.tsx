import { useState } from 'react';
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
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>A Casa do Código e da Massa</div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__title}>Cardápio</h3>

        <SearchBar search={search} setSearch={setSearch} />

        <div className={styles.cardapio__filtros}>
          <Filters filter={filter} setFilter={setFilter} />

          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>

        <Itens search={search} filter={filter} sorter={sorter} />
      </section>
    </main>
  );
}
