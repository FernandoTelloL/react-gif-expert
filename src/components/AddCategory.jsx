import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  //cada componente puede tener sus propios estado
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    //con esta linea estoy renderizando cada tecla en el input de event.target.value
    setInputValue(target.value);
  };

  //con esta funcion evito que se actualice la pagina al presionar Enter en el formulario
  const onSubmit = e => {
    e.preventDefault();
    //confirmo si el input es igual a 1 o menor me bote de la funcion y no haya cambio
    if (inputValue.trim().length <= 1) return;
    // en caso si halla mas de 1 letra setee las categorias
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    //en esta linea digo que al presionar Enter llame a la funcion onSubmit
    //onSubmit utiliza un callback que trae el evento seria: <form onSubmit={ (event) => onSubmit(event)}>
    //pero esto se puede resumir asi:
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        //todo input debe tener el metodo onChange y funciona cada vez que se teclea adentro
        //para que cambie segun el estado sino seria el valor estatico de value
        // originalmente la linea de abajo seria onChange={(event) => onInputChange(event)} pero tenemos el caso que la funcion cuyo primero argumento es
        //el primero de la funcion que quiero escuchar por eso se simplifica asi
        onChange={onInputChange}
      />
    </form>
  );
};
