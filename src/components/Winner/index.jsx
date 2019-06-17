import React from 'react';
import PropTypes from 'prop-types';

import {getWinnerData} from './utils/utils';

const Winner = ({data, handlerPlayAgainBtn}) => {
  const winner = getWinnerData(data);
  return (
      <div className='container container--center container--bg-primary full-height'>
        <div className='text--center'>
          <h1>We have a WINNER!!</h1>
          <p>{winner} is the new EMPEROR!</p>
          <button 
            className='btn btn--color-secondary margin--top-30 full--width'
            onClick={handlerPlayAgainBtn}
          >
            Play Again
          </button>
        </div>
      </div>
  );
}

Winner.propTypes = {
  data: PropTypes.object,
  handlerPlayAgainBtn: PropTypes.func,
};

export default Winner;