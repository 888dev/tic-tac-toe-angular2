import { Component } from '@angular/core';
import { GameCreatorService } from 'app/game/gameCreator.service.ts'

@Component({
    selector: '.board',
    inputs: ['board'],
    template: '<div class="row" *ngFor="let row of board; let x=index">' +
        '<div *ngFor="let cell of row; let y=index">' +
        '<div class="cell" (click)="onSelect(x, y)">' +
        '<span class="playerSign">{{cell}}</span></div>' +
        '</div></div>',
    styleUrls: ['app/game/board/board.css']
})
export class BoardComponent {
    public board = [];
    gameData = this._gameCreatorService.getGameData();

    constructor(private _gameCreatorService: GameCreatorService) { }

    onSelect(row :number, col: number){
        if (this.board[row][col] !== null)
            return;
        this.board[row][col] = this.gameData.turn;
        this._gameCreatorService.checkBoard(row, col);
        this.gameData.turn = this.gameData.turn === 'o' ? 'x' : 'o';
    }
}