import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BoardComponent } from 'app/game/board/board.component.ts';
import { GameComponent } from 'app/game/game.component.ts';
import { GameCreatorService } from './game/gameCreator.service.ts'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, BoardComponent, GameComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ GameCreatorService ]
})
export class AppModule { }

