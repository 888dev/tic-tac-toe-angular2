import { Injectable } from '@angular/core';

@Injectable()
export class GameCreatorService {
    private gameData = {
        turn: 'x',
        winningsX: 0,
        winningsO: 0,
        winner: '',
        isStarted: false
    };
    private board = [];

    createBoard(dimension :number) {
        this.board = [];
        for (let row = 0; row < dimension; row++) {
            this.board[row] = [];
            for (let col = 0; col < dimension; col++) {
                this.board[row][col] = null;
            }
        }
        this.gameData.isStarted = true;
        return this.board;
    }
    getGameData(){
        return this.gameData;
    }
    resetGame(){
        this.gameData.turn = 'x';
        this.gameData.winner = '';
        this.board = [];
        this.gameData.isStarted = false;
    }
    checkBoard(row, col){
        var columnArray = this.board.map(function(value,index) { return value[col]; });
        var leftToRight = this.board.map((row, index) => row[index]);
        var rightToLeft = this.board.map((row, index) => row[row.length - 1 - index]);

        //check arrays for winner
        if(this.checkArray(this.board[row]) || this.checkArray(columnArray) || this.checkArray(leftToRight) || this.checkArray(rightToLeft)){
            this.gameData.winner = this.gameData.turn;
            this.gameData.turn === 'x' ? this.gameData.winningsX++ : this.gameData.winningsO++;
            this.board = [];
            console.log('Winner in row is ' + this.gameData.turn);
        }
    }
    checkArray(array){
        if(array.every(s => s === this.gameData.turn)){
            return true;
        }
        return false;
    }
}
