import React from 'react';
import PropTypes from 'prop-types';

const BattlefieldHeader = ({round, userName}) => {
  return (
    <div>
      <h1 className='margin--bottom-0'>Round {round}</h1>
      <h4 className='margin--top-0'>Player {userName}</h4>
      <p>Select move:</p>
    </div>
  );
}

BattlefieldHeader.propTypes = {
  round: PropTypes.number,
  userName: PropTypes.string,
};

export default BattlefieldHeader;