import { Component } from '@angular/core';
import { GameCreatorService } from 'app/game/gameCreator.service.ts'

@Component({
    selector: '.board',
    inputs: ['board'],
    templateUrl: 'app/game/board/board.html',
    styleUrls: ['app/game/board/board.css']
})
export class BoardComponent {
    public board = [];
    gameData = this._gameCreatorService.getGameData();

    constructor(private _gameCreatorService: GameCreatorService) {    }

    onSelect(row :number, col: number){
        if (this.board[row][col].turn)
            return;
        this.board[row][col] = {turn: this.gameData.turn};
        this._gameCreatorService.checkBoard(row, col);
        this.gameData.turn = this.gameData.turn === 'o' ? 'x' : 'o';
    }
}
