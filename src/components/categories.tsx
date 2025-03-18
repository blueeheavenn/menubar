import cat from '../data/cat.ts';
import Menudisplay from './menudisplay.tsx';

const Categories = () => {
  return (
    <div>
      Categories
      <Menudisplay data={cat} />
    </div>
  );
};

export default Categories;
