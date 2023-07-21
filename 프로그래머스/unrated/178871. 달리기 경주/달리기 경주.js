function solution(players, callings) {
  const playersHash = {};
  for (let i = 0; i < players.length; i++) {
    playersHash[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    let index = playersHash[callings[i]];
    const temp = players[index - 1];
    players[index - 1] = players[index];
    players[index] = temp;
    playersHash[callings[i]] = index - 1;
    playersHash[temp] = index;
  }
  return players;
}