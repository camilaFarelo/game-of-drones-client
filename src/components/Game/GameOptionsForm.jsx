import React from 'react';

const GameOptionsForm = ({handleSubmitMove, selectedMove, options, handlesSelectMove}) => {
  return (
    <form className='form margin--bottom-30' onSubmit={handleSubmitMove}>
      {options.map((option) => (
        <div key={option.name} className='form__radio-container'>
          <input 
            className='form__radio form__input--hidden' 
            type='radio' 
            id={option.name} 
            name='weapon' 
            value={option.value} 
            checked={selectedMove ? selectedMove.id === option.name : false}
            onChange={handlesSelectMove} 
          />
          <label htmlFor={option.name}>
            <img src={`./../../images/${option.name}.png`} width='50px' />
          </label>
        </div>
      ))}
      <input 
        className='btn btn--color-secondary margin--top-30 full--width' 
        type='submit' 
        value='Ok'
      />
    </form>
  );
}

export default GameOptionsForm;