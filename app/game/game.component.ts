import { Component } from '@angular/core';
import { BoardComponent } from 'app/game/board/board.component.ts';
import { GameCreatorService } from './gameCreator.service.ts'
import { Resources } from './resources.ts';

@Component({
    selector: '.game',
    templateUrl: 'app/game/game.html',
    directives: [ BoardComponent ]
})
export class GameComponent {
    public createdBoard = [];
    public dimension = 3;
    gameData = this._gameCreatorService.getGameData();
    resources = Resources;

    constructor(private _gameCreatorService: GameCreatorService) { }

    startGame(){
        this._gameCreatorService.resetGame();
        this.createdBoard = this._gameCreatorService.createBoard(this.dimension ? this.dimension : 3);
        console.log('new game started');
    }
}