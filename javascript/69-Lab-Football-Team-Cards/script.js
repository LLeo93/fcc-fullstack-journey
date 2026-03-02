const footballTeam = {
  team: 'Italy',
  year: 2006,
  headCoach: 'Marcello Lippi',
  players: [
    {
      name: 'Gianluigi Buffon',
      position: 'goalkeeper',
      isCaptain: false,
    },
    {
      name: 'Fabio Cannavaro',
      position: 'defender',
      isCaptain: true,
    },
    {
      name: 'Andrea Pirlo',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Alessandro Del Piero',
      position: 'forward',
      isCaptain: false,
    },
  ],
};
const { team, year, headCoach, players } = footballTeam;

document.getElementById('team').textContent = team;
document.getElementById('year').textContent = year;
document.getElementById('head-coach').textContent = headCoach;

const playerCards = document.getElementById('player-cards');
const playersDropdown = document.getElementById('players');

const displayPlayers = (playerList) => {
  playerCards.innerHTML = '';
  playerList.forEach(({ name, position, isCaptain }) => {
    playerCards.innerHTML += `
      <div class="player-card">
        <h2>${isCaptain ? '(Captain) ' : ''}${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `;
  });
};

displayPlayers(players);
playersDropdown.addEventListener('change', (e) => {
  const selectedValue = e.target.value;
  if (selectedValue === 'all') {
    displayPlayers(players);
  } else {
    const filteredPlayers = players.filter(
      (player) => player.position === selectedValue,
    );
    displayPlayers(filteredPlayers);
  }
});
