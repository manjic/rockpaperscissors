function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.PAIRS = {
  
  'rock': ['scissors', 'lizard'],
  'paper': ['rock', 'spock'],
  'scissors': ['paper', 'lizard'],
  'spock': ['scissors', 'rock'],
  'lizard': ['paper', 'spock']
}

Game.prototype.winner = function() {
	if (this.samePick()) {
		return null;
	}
	if (this.PAIRS[this.player1.pick].indexOf(this.player2.pick) != -1){
		return this.player1;
	}
	else {
		return this.player2;
	}
}

Game.prototype.samePick = function() {
	return this.player1.pick == this.player2.pick;
}