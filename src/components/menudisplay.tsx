import  { JSX } from 'react';
import { catType } from '../data/cat.ts';
import recursiveCategory from '../utilities/catUtility.ts';

    type MenudisplayProps = {
      data: catType[]; // Correct prop type
    };

    const Menudisplay = ({ data }: MenudisplayProps): JSX.Element => {
      
    const categoryData=recursiveCategory(data)
      
             
      return (<ul>
          <div>
          {categoryData.map((item, index) => (
                  
            <li style={{ listStyle: 'none' }} key={`${index}`}><pre>{item}</pre></li>
                  
          ))}
          </div>
              </ul>
      
      
      
         ) ; // Corrected rendering
      
    };

    export default Menudisplay;