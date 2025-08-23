import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiftsListItemPageComponent } from './gifts-list-item-page/gifts-list-item-page.component';

@Component({
  selector: 'app-gifts-list-page',
  imports: [GiftsListItemPageComponent],
  templateUrl: './gifts-list-page.component.html',

})
export class GiftsListPageComponent { 

  gifsList = input.required<string[]>();



}
