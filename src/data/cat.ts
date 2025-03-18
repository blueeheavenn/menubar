export type catType = {
  name: string;
  subcategories?: catType[];
};

const cat: catType = [
  {
    name: 'Electronics',
    subcategories: [
      {
        name: 'Laptops',
        subcategories: [{ name: 'Gaming' }, { name: 'Business' }],
      },
      { name: 'Smartphones' },
      { name: 'TVs' },
    ],
  },
  {
    name: 'Clothing',
    subcategories: [{ name: "Men's" }, { name: "Women's" }],
  },
  {
    name: 'Home & Kitchen',
    subcategories: [{ name: 'Appliances' }, { name: 'Furniture' }],
  },
];

export default cat;
