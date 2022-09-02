import { Pipe, PipeTransform } from '@angular/core';
import { couldStartTrivia } from 'typescript';

@Pipe({
  name: 'search2filter'
})
export class Search2filterPipe implements PipeTransform {

  transform(allsong:any,query:any): any {
   
    if(!allsong || !query){
      return allsong;
    }
    return allsong.filter((song: { title: string; album:string;singers:any;genre:any;length:any;url:any}) => {
    return song.title.toLowerCase().match(query.toLowerCase())||
    song.album.toLowerCase().match(query.toLowerCase())||
    song.singers.toLowerCase().match(query.toLowerCase())||
    song.genre.toLowerCase().match(query.toLowerCase())||
    song.url.toLowerCase().match(query.toLowerCase())
    
    });
  }

}
