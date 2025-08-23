import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-gifts-list-item-page',
  imports: [],
  templateUrl: './gifts-list-item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftsListItemPageComponent { 
  imgUrl = input.required<string>();

}
