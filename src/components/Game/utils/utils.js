export const getScore = (weapon, player1) => {
  let player2Score;
  let player1Score;
  if (weapon == player1.weapon) {
    player2Score = 0;
    player1Score = 0;
  } else if ((weapon - player1.weapon + 3) % 3 == 1) {
    player2Score = 1;
    player1Score = 0;
  } else {
    player2Score = 0;
    player1Score = 1;
  }
  return {
    player2Score,
    player1Score
  }
};

export const getTotalScore = (scores, state) => {
  const player1Score = scores.player1Score + state.totalPlayer1Score;
  const player2Score = scores.player2Score + state.totalPlayer2Score;
  return {player1Score, player2Score};
}

export const parsePutData = (game, scores, round) => {
  return {
    round: round,
    first_player_name: `${game.first_player.player[0].player_name}`,
    second_player_name: `${game.second_player.player[0].player_name}`,
    fist_player_id: `${game.first_player.player[0].player_id}`,
    second_player_id: `${game.second_player.player[0].player_id}`,
    player_1_score: scores.player1Score,
    player_2_score: scores.player2Score,
  };
}