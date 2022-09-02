import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongslistService {
  constructor(private _http:HttpClient) {}
  
    createSong(song:any){
      return this._http.post("http://localhost:3000/songs", song);
        }
        updateSong(song:any){
          return this._http.put("http://localhost:3000/songs/" +song.id, song) }
        getAllsong(){
          return this._http.get("http://localhost:3000/songs")
        }
        deleteSong(song:any){
          return this._http.delete("http://localhost:3000/songs/" +song.id)
        }
            
}
