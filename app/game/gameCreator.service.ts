import { Injectable } from '@angular/core';

@Injectable()
export class GameCreatorService {
    //default game data
    private gameData = {
        turn: 'x',
        winningsX: 0,
        winningsO: 0,
        winner: '',
        isStarted: false,
        dimension: 3,
        widthOfCell: 0
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
        return this.board;
    }
    //get gamedata
    getGameData(){
        return this.gameData;
    }
    resetGame(){
        this.gameData.turn = 'x';
        this.gameData.winner = '';
        this.board = [];
        this.gameData.isStarted = false;
    }
    //check board for winning rows
    checkBoard(row, col){
        var columnArray = this.board.map(function(value,index) { return value[col]; });
        var leftToRight = this.board.map((row, index) => row[index]);
        var rightToLeft = this.board.map((row, index) => row[row.length - 1 - index]);

        //check arrays for winner
        if(this.checkArray(this.board[row]) || this.checkArray(columnArray) || this.checkArray(leftToRight) || this.checkArray(rightToLeft)){
            //set winner current turn
            this.gameData.winner = this.gameData.turn;
            //count winnings for current turn
            this.gameData.turn === 'x' ? this.gameData.winningsX++ : this.gameData.winningsO++;
            //empty the board
            this.board = [];
            console.log('Winner in row is ' + this.gameData.turn);
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
