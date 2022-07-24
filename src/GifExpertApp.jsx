import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  //este hock se utiliza porque voy a almacenar varias categorias en mi estado
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = newCategory => {
    //dos formas de usar setCategories
    //Esta es usando un CALLBACK
    // setCategories(cat => [...cat, 'Valorant']);
    //en la siguiente linea verificamos que la categoria no exista para poder guardarla
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //Agregando PROPS de mi componente
        onNewCategory={value => onAddCategory(value)}
      />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
