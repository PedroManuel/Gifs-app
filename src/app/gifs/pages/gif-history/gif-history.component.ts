import {  Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal}from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GiftsListPageComponent } from "../../components/gifts-list-page/gifts-list-page.component";

@Component({
  selector: 'app-gif-history',
  imports: [GiftsListPageComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent { 


  gifService =inject(GifService);

  /*query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log(params['query']);
  });*/
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  );

  gifsByKey = computed( () =>{
    return this.gifService.getHistoryGifs(this.query());
  })

  
  
}


