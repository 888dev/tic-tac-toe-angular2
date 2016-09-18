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
var board_component_ts_1 = require('app/game/board/board.component.ts');
var gameCreator_service_ts_1 = require('./gameCreator.service.ts');
var resources_ts_1 = require('./resources.ts');
var GameComponent = (function () {
    function GameComponent(_gameCreatorService) {
        this._gameCreatorService = _gameCreatorService;
        this.createdBoard = [];
        this.dimension = 3;
        this.gameData = this._gameCreatorService.getGameData();
        this.resources = resources_ts_1.Resources;
    }
    GameComponent.prototype.startGame = function () {
        this._gameCreatorService.resetGame();
        this.createdBoard = this._gameCreatorService.createBoard(this.dimension ? this.dimension : 3);
        console.log('new game started');
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: '.game',
            templateUrl: 'app/game/game.html',
            directives: [board_component_ts_1.BoardComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof gameCreator_service_ts_1.GameCreatorService !== 'undefined' && gameCreator_service_ts_1.GameCreatorService) === 'function' && _a) || Object])
    ], GameComponent);
    return GameComponent;
    var _a;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map