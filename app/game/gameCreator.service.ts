import { Injectable } from '@angular/core';
import { Player } from 'app/game/player.ts';

@Injectable()
export class GameCreatorService {
//default game data
    private gameData = {
        turn: Player.x,
        winningsX: 0,
        winningsO: 0,
        winner: '',
        draw: '',
        isStarted: false,
        dimension: 3,
        widthOfCell: 0,
        numOfXTurns: 0,
        clicksCount: 0
    };
    private board = [];
    //create board by dimension
    createBoard(dimension :number) {
        this.board = [];
        for (let row = 0; row < dimension; row++) {
            this.board[row] = [];
            for (let col = 0; col < dimension; col++) {
                this.board[row][col] = {};
            }
        }
        this.gameData.isStarted = true;
        this.gameData.numOfXTurns = 0;
        this.gameData.clicksCount = 0;
        return this.board;
    }
    //get gamedata
    getGameData(){
        return this.gameData;
    }
    resetGame(){
        this.gameData.turn = Player.x;
        this.gameData.winner = '';
        this.gameData.draw = '';
        this.board = [];
        this.gameData.isStarted = false;
        this.gameData.numOfXTurns = 0;
        this.gameData.clicksCount = 0;
    }
    //check board for winning rows
    checkBoard(row, col){
        //count num of x player click
        this.gameData.numOfXTurns = this.gameData.turn === Player.x ? this.gameData.numOfXTurns + 1 : this.gameData.numOfXTurns;

        //count num of players click
        this.gameData.clicksCount++;

        //check if draw in game
        if(this.gameData.clicksCount === (parseInt(this.gameData.dimension) * parseInt(this.gameData.dimension)) - 1){
            this.gameData.draw = 'draw';
        }

        //start check the board after specific click
        if (this.gameData.numOfXTurns >= parseInt(this.gameData.dimension)) {
            var columnArray = this.board.map(function (value) {
                return value[col];
            });
            var leftToRight = this.board.map((row, index) => row[index]);
            var rightToLeft = this.board.map((row, index) => row[row.length - 1 - index]);

            //check arrays for winner
            if (this.checkArray(this.board[row]) || this.checkArray(columnArray) || this.checkArray(leftToRight) || this.checkArray(rightToLeft)) {
                //set winner current turn
                this.gameData.winner = this.gameData.turn;
                //count winnings for current turn
                this.gameData.turn === Player.x ? this.gameData.winningsX++ : this.gameData.winningsO++;
                //empty the board
                this.board = [];
                console.log('Winner in row is ' + this.gameData.turn);
            }
        }
    }
    //checks arrays for winning row
    checkArray(array){
        if(array.every(s => s.turn === this.gameData.turn)){
            array.every(s => s.isWinningCell = true);
            return true;
        }
        return false;
    }
}
