import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Filters from "./Filters";
import Sorter from "./Sorter";
import Itens from "./Itens";

export default function Cardapio() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>

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

        <Itens />
      </section>
    </main>
  );
}
