import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SongslistComponent } from '../songslist/songslist/songslist.component';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
names=new Subject;
sendProfile=new Subject;
  constructor(private _http:HttpClient) { }
  sendnewsong(song:any){
    return this._http.post("http://localhost:3000/playlist", song);
      }
      getallsong(){
        return this._http.get("http://localhost:3000/songs");
      }
      getallsongsfromplaylists(){
        return this._http.get("http://localhost:3000/playlist");
      }
      getlistbyid(song:any){
        return this._http.get("http://localhost:3000/playlist/" +song.id)
      }
      updateSong(song:any){
        return this._http.put("http://localhost:3000/songs/" +song.id , song);
      }
        deleteSong(song:any){
          return this._http.delete("http://localhost:3000/songs/" +song.id );
        }
        updatesongsinplaylist(song:any){
          return this._http.put("http://localhost:3000/playlist/" +song.id , song);
        }
        deletesong(song:any){
          return this._http.delete("http://localhost:3000/playlist/" +song.id );
        }
        sendprofile(profile:any){
          this.sendProfile.next(profile);
          console.log(profile)
        }
      }
