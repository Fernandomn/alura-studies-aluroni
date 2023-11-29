import { useEffect, useState } from 'react';
import { SorterOptions } from 'types/sort';
import Item from './Item';
import styles from './Itens.module.scss';
import cardapio from '../../../data/cardapio.json';

interface Props {
  search: string;
  filter: number | null;
  sorter: SorterOptions;
}

export default function Itens({ search, filter, sorter }: Props) {
  const [list, setList] = useState(cardapio);

  useEffect(() => {
    const trySearch = (title: string): boolean => {
      const regex = new RegExp(search, 'i');
      return regex.test(title);
    };

    const tryFilter = (itemId: number): boolean => {
      return filter ? filter === itemId : true;
    };

    const sortList = (newList: typeof cardapio) => {
      switch (sorter) {
      case 'porcao':
        return ordenarPropriedadeCrescente(newList, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedadeCrescente(newList, 'serving');
      case 'preco':
        return ordenarPropriedadeCrescente(newList, 'price');
      default:
        return newList;
      }
    };

    const newList = cardapio.filter(
      (item) => trySearch(item.title) && tryFilter(item.category.id)
    );
    setList(sortList(newList));
  }, [search, filter, sorter]);

  const ordenarPropriedadeCrescente = (
    lista: typeof cardapio,
    propriedade: 'size' | 'serving' | 'price'
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
