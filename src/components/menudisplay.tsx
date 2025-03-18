import { JSX } from 'react/jsx-runtime';
import cat, { catType } from '../data/cat.ts';
const Menudisplay = (cat: catType[]): JSX.Element => {
  return <div>{cat.m}</div>;
};

export default Menudisplay;
