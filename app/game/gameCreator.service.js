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
var GameCreatorService = (function () {
    function GameCreatorService() {
        this.gameData = {
            turn: 'x',
            winningsX: 0,
            winningsO: 0,
            winner: '',
            isStarted: false
        };
        this.board = [];
    }
    GameCreatorService.prototype.createBoard = function (dimension) {
        this.board = [];
        for (var row = 0; row < dimension; row++) {
            this.board[row] = [];
            for (var col = 0; col < dimension; col++) {
                this.board[row][col] = null;
            }
        }
        this.gameData.isStarted = true;
        return this.board;
    };
    GameCreatorService.prototype.getGameData = function () {
        return this.gameData;
    };
    GameCreatorService.prototype.resetGame = function () {
        this.gameData.turn = 'x';
        this.gameData.winner = '';
        this.board = [];
        this.gameData.isStarted = false;
    };
    GameCreatorService.prototype.checkBoard = function (row, col) {
        var columnArray = this.board.map(function (value, index) { return value[col]; });
        var leftToRight = this.board.map(function (row, index) { return row[index]; });
        var rightToLeft = this.board.map(function (row, index) { return row[row.length - 1 - index]; });
        //check arrays for winner
        if (this.checkArray(this.board[row]) || this.checkArray(columnArray) || this.checkArray(leftToRight) || this.checkArray(rightToLeft)) {
            this.gameData.winner = this.gameData.turn;
            this.gameData.turn === 'x' ? this.gameData.winningsX++ : this.gameData.winningsO++;
            this.board = [];
            console.log('Winner in row is ' + this.gameData.turn);
        }
    };
    GameCreatorService.prototype.checkArray = function (array) {
        var _this = this;
        if (array.every(function (s) { return s === _this.gameData.turn; })) {
            return true;
        }
        return false;
    };
    GameCreatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameCreatorService);
    return GameCreatorService;
}());
exports.GameCreatorService = GameCreatorService;
//# sourceMappingURL=gameCreator.service.js.map