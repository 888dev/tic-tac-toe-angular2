import { Component, Output, EventEmitter } from '@angular/core';
import { Player } from 'app/game/player.ts';

@Component({
    selector: '.board',
    inputs: ['board', 'gameData'],
    templateUrl: 'app/game/board/board.html',
    styleUrls: ['app/game/board/board.css']
})
export class BoardComponent {
    public board = [];
    public gameData;
    @Output() cellSelected = new EventEmitter();

    onSelect(row :number, col: number){
        if (this.board[row][col].turn)
            return;
        this.board[row][col] = {turn: this.gameData.turn};
        this.cellSelected.emit({row:row, col:col});
        this.gameData.turn = this.gameData.turn === Player.o ? Player.x : Player.o;
    }
}
