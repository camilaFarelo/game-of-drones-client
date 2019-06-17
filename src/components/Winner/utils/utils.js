export const getWinnerData = (data) => {
  if (!data) return null;
  return data.player1.total > data.player2.total 
    ? data.player1.name 
    : data.player2.name;
}

export const getUsersTotals = (updatedGame) => {
  if (!updatedGame) return null;
  let player1 = {id: '', total: 0};
  let player2 = {id: '', total: 0};
  const {rounds: {round}} = updatedGame;
  if (!round) return null;
  for (var i=0; i < round.length; i++) {
    player1 = {
      name: round[i].first_player_name,
      total: player1.total + round[i].player_1_score,
    };
    player2 = {
      name: round[i].second_player_name,
      total: player2.total + round[i].player_2_score,
    };
  };
  return {player1, player2}
}