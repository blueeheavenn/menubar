import cat, {catType} from '../data/cat.ts';
import Menudisplay from './menudisplay.tsx';

const Categories = () => {

  
 const data: catType[] = cat;
  return (
    <div> 
      Categories
      <Menudisplay data={data} />
    </div>
  );
};

export default Categories;
