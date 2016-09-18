import { Component } from '@angular/core';
import { GameComponent } from 'app/game/game.component.ts'
import { Resources } from './game/resources.ts';

@Component({
    selector: 'my-app',
    template: '<h1>{{ title }}</h1><div class="game"></div>',
    directives: [ GameComponent ]
})
export class AppComponent {
    title = Resources.title;
}
