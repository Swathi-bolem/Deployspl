import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {SongslistService} from '../songslist.service' ;
import {Router} from '@angular/router';
import { PlaylistService } from 'src/app/playlist/playlist.service';
import { UsersService} from 'src/app/users.service';
import { ActivatedRoute} from '@angular/router';
import {ComponentCanDeactivate} from  'src/app/component-can-deactivate'


@Component({
  selector: 'body',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css'],

})
export class SongslistComponent implements OnInit,ComponentCanDeactivate {
  genres:any=['Jazz','Rock','Hip-Hop','Dance','Romantic','Rhythm','Country','Electro','Indie'];
  searchvalue:any;
  leave:boolean=true;
  enablecheckbox:boolean=false;
  options:any=[];
  playlistbutton:boolean=true;
  x:boolean=true;
a:boolean=false; 
b:boolean=false;
c:boolean=false; 
d:boolean=false;   
isEdit=false;

valid:boolean=false;
parentData:any;
set:boolean=true;
  allSong:any=[];
  me:any;
  songobj={
    title:'',
      album: '',
      singers: '',
      length:'',
      genre:'',
      url:''
  }
  test="Hello"
  constructor(private routes:ActivatedRoute, private uservice:UsersService, private pservice:PlaylistService, public formBuilder:FormBuilder,private route:Router,private songservice:SongslistService) {this.allSong=Object;
     }
  songform = new FormGroup({
    title: new FormControl(''),
   album:new FormControl(''),
   singers:new FormControl(''),
   length:new FormControl(''),
   genre:new FormControl(''),
   url:new FormControl('')

  });
  ngOnInit(): void {
    

const b=this.uservice.issure.subscribe((message)=>{

  if(message==true){
    this.valid=true;
  }
})

   this.uservice.out.subscribe((message)=>{
      this.parentData=message;
      if(message==false){
        this.valid=false;
        this.set=false;
      }
          });
         
  //this.valid=this.routes.snapshot.params.validuser;
   
    this.getLatestSong();
    this.songform=this.formBuilder.group({
      title:[ '',[Validators.required,Validators.minLength(4)]],
      album:['',[Validators.required,Validators.minLength(4)]],
      singers:['',[Validators.required,Validators.minLength(4)]],
length:['',[Validators.required,Validators.min(1),Validators.max(1000),Validators.pattern('^[0-9]*')]],
genre:['',[Validators.required]],
url:['',[Validators.required,Validators.minLength(5)]]
    })
  }
  addsong(formObj:any){
    this.leave=false;
    if(this.valid&&this.set){
    this.songservice.createSong(formObj).subscribe((response)=>{
     this.getLatestSong();
    })
    this.songform.reset();
  }else{alert("you must be logged in user to perform these operations")}}
  getLatestSong(){
    this.songservice.getAllsong().subscribe((response)=>{
      this.allSong=response;
    });
    
  }
  editSong(song :any){
    if(this.valid &&  this.set){
    this.isEdit=true;
    this.songobj=song;
    this.moveToSelectedTab;}else{alert("you must be logged in user to perform these operations")};
    
  }
  deleteSong(song :any){
    if(this.valid &&  this.set){
      
    this.songservice.deleteSong(song).subscribe(()=>{
      this.getLatestSong();
    })}
    else{alert("you must be logged in user to perform these operations")}
  }
  updateSong(){
    this.leave=false;
    this.isEdit=false;
    this.songservice.updateSong(this.songobj).subscribe(()=>{
      this.getLatestSong();
     
    })
    this.songform.reset();
    
  }
 moveToSelectedTabs(tabName: string) {
    
   for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
       if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
         (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
      }
      this.updateSong();
 }

  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
        }
      }
  }
  on(){this.x=!this.x}
  onview(){
this.x=!this.x;
  }

o(event:any){
if(event.target.checked==true){
  this.a=true;
  
}else{
  this.a=false;
}
}
w(event:any){
  if(event.target.checked==true){
    this.b=true;
   
  }else{
    this.b=false;
  }
  }
  q(event:any){
    if(event.target.checked==true){
      this.c=true;
     
    }else{
      this.c=false;
    }
    }
    s(event:any){
      if(event.target.checked==true){
        this.d=true;
        
      }else{
        this.d=false;
      }
      }
ondeletemultiple(){
  this.enablecheckbox=!this.enablecheckbox;
}

onselectsongs(event:any,song:any){
  if  (event.target.checked==true){
    
    
    this.songservice.deleteSong(song).subscribe(()=>{
      this.getLatestSong();
    })}
      }
   

      canDeactivate (): boolean{
        if((this.songform.touched&&this.songform.dirty&&this.songform.invalid)||(this.leave&&this.songform.valid)){
          return false;}
          else{
            return true;
          }
        }
gotoup(){         
window.scrollTo(10,10)
}
}
  


