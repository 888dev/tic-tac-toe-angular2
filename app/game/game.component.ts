import { Component } from '@angular/core';
import { GameCreatorService } from './gameCreator.service.ts'
import { Resources } from './resources.ts';

@Component({
    selector: '.game',
    templateUrl: 'app/game/game.html'
})
export class GameComponent {
    public createdBoard = [];
    public gameData = this._gameCreatorService.getGameData();
    resources = Resources;

    constructor(private _gameCreatorService: GameCreatorService) { }

    startGame(){
        this._gameCreatorService.resetGame();
        this.createdBoard = this._gameCreatorService.createBoard(this.gameData.dimension);
        //calc width of cells
        this.gameData.widthOfCell = (95 / this.gameData.dimension) + '%';
        console.log('new game started');
    }

    cellSelected(point){
        this._gameCreatorService.checkBoard(point.row, point.col);
    }
    close(){
        this._gameCreatorService.resetGame();
        this.createdBoard = [];
    }
}
