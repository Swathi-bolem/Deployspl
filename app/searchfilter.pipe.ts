import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(allSong:any,searchvalue:any): any {

    if(!allSong || !searchvalue){
      return allSong;
    }
    return allSong.filter((song: { title: string; album:string;singers:any;genre:any;length:any;url:any}) => {
    return song.title.toLowerCase().match(searchvalue.toLowerCase())||
    song.album.toLowerCase().match(searchvalue.toLowerCase())||
    song.singers.toLowerCase().match(searchvalue.toLowerCase())||
    song.genre.toLowerCase().match(searchvalue.toLowerCase())||
    song.url.toLowerCase().match(searchvalue.toLowerCase())
    
    });
  }

  
  }


