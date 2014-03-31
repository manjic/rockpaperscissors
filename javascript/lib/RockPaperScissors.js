function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
	this.pairs = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
	}

}

Game.prototype.winner = function() {
	if (this.samePick()) {
		return null;
	}
	if (this.pairs[this.player1.pick] == this.player2.pick){
		return this.player1;
	}
	else {
		return this.player2;
	}
}

Game.prototype.samePick = function() {
	if(this.player1.pick == this.player2.pick) {
		return true;
	}
}