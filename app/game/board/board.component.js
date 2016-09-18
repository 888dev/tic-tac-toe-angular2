"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gameCreator_service_ts_1 = require('app/game/gameCreator.service.ts');
var BoardComponent = (function () {
    function BoardComponent(_gameCreatorService) {
        this._gameCreatorService = _gameCreatorService;
        this.board = [];
        this.gameData = this._gameCreatorService.getGameData();
    }
    BoardComponent.prototype.onSelect = function (row, col) {
        if (this.board[row][col] !== null)
            return;
        this.board[row][col] = this.gameData.turn;
        this._gameCreatorService.checkBoard(row, col);
        this.gameData.turn = this.gameData.turn === 'o' ? 'x' : 'o';
    };
    BoardComponent = __decorate([
        core_1.Component({
            selector: '.board',
            inputs: ['board'],
            template: '<div class="row" *ngFor="let row of board; let x=index">' +
                '<div *ngFor="let cell of row; let y=index">' +
                '<div class="cell" (click)="onSelect(x, y)">' +
                '<span class="playerSign">{{cell}}</span></div>' +
                '</div></div>',
            styleUrls: ['app/game/board/board.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof gameCreator_service_ts_1.GameCreatorService !== 'undefined' && gameCreator_service_ts_1.GameCreatorService) === 'function' && _a) || Object])
    ], BoardComponent);
    return BoardComponent;
    var _a;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map