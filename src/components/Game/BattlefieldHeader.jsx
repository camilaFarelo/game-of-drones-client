import React from 'react';

const BattlefieldHeader = ({round, userName}) => {
  return (
    <div>
      <h1 className='margin--bottom-0'>Round {round}</h1>
      <h4 className='margin--top-0'>Player {userName}</h4>
      <p>Select move:</p>
    </div>
  );
}

export default BattlefieldHeader;