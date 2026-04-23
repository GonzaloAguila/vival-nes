export type Category = 'consola' | 'juego' | 'accesorio';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  stock: number;
  image: string;
}

const placeholder = (label: string): string =>
  `https://placehold.co/300x300/D62828/FFFFFF?text=${encodeURIComponent(label)}`;

export const products: Product[] = [
  {
    id: 'nes-classic',
    name: 'NES',
    category: 'consola',
    price: 185000,
    stock: 4,
    image: '/products/nes.png',
  },
  {
    id: 'snes-classic',
    name: 'Super Nintendo',
    category: 'consola',
    price: 225000,
    stock: 3,
    image: '/products/supernes.png',
  },
  {
    id: 'nes-mini',
    name: 'NES Mini',
    category: 'consola',
    price: 135000,
    stock: 6,
    image: placeholder('NES Mini'),
  },
  {
    id: 'snes-mini',
    name: 'SNES Mini',
    category: 'consola',
    price: 165000,
    stock: 5,
    image: placeholder('SNES Mini'),
  },
  {
    id: 'mario-bros-3',
    name: 'Super Mario Bros 3',
    category: 'juego',
    price: 38000,
    stock: 8,
    image: placeholder('Super Mario Bros 3'),
  },
  {
    id: 'zelda-link-to-the-past',
    name: 'Zelda: A Link to the Past',
    category: 'juego',
    price: 52000,
    stock: 5,
    image: placeholder('Zelda ALTTP'),
  },
  {
    id: 'metroid',
    name: 'Metroid',
    category: 'juego',
    price: 29000,
    stock: 7,
    image: placeholder('Metroid'),
  },
  {
    id: 'donkey-kong-country',
    name: 'Donkey Kong Country',
    category: 'juego',
    price: 46000,
    stock: 6,
    image: placeholder('Donkey Kong Country'),
  },
  {
    id: 'joystick-nes',
    name: 'Joystick NES',
    category: 'accesorio',
    price: 22000,
    stock: 12,
    image: placeholder('Joystick NES'),
  },
  {
    id: 'joystick-snes',
    name: 'Joystick SNES',
    category: 'accesorio',
    price: 26000,
    stock: 10,
    image: placeholder('Joystick SNES'),
  },
  {
    id: 'super-scope',
    name: 'Super Scope',
    category: 'accesorio',
    price: 78000,
    stock: 2,
    image: placeholder('Super Scope'),
  },
  {
    id: 'everdrive',
    name: 'Cartucho Everdrive',
    category: 'accesorio',
    price: 145000,
    stock: 3,
    image: placeholder('Everdrive'),
  },
];
