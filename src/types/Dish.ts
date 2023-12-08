import cardapio from 'data/cardapio.json';

export type Menu = typeof cardapio;

export type MenuItem = (typeof cardapio)[0];
