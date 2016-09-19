import { Component } from '@angular/core';
import { Resources } from './game/resources.ts';

@Component({
    selector: 'my-app',
    template: '<h1>{{ title }}</h1><div class="game"></div>'
})
export class AppComponent {
    title = Resources.title;
}
