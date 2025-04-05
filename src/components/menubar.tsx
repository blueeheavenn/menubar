import { JSX } from 'react';
import Categories from './categories';
import Account from './Account';
import Deals from './Deals';
import Contact from './contact';
import style from '../assets/styles/menubar.module.css';

const Menubar = (): JSX.Element => {
  return (
    <div className={style.menubar}>
      <Categories />
      <Account />
      <Deals />
      <Contact />
    </div>
  );
};

export default Menubar;
