import { atom } from 'jotai';

interface Product {
    id: number;
    title: string;
    image: string;
    priceValue: string;
  }

export const cartAtom = atom<Product[]>([]);
