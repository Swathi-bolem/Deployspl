import { Component, OnInit } from '@angular/core';
import {SongslistService} from '../songslist/songslist.service' ;
import {PlaylistService} from '../playlist/playlist.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Router} from '@angular/router';

import { Label } from 'ng2-charts';
import { ViewportScroller } from '@angular/common';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public barChartOptions: ChartOptions  = {
responsive:true,
    legend: {
      display:true,
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                                 
            }
        },
       
  };
  

  public barChart2Labels:Label[]=[];
  public barChartLabels:Label[]=[];
  public barChartType: ChartType = 'bar';
  public barChartLegend =true;
 
  public barChartPlugins = [];
  public barChart2Data: ChartDataSets[] = [];
  public barChartData: ChartDataSets[] = [];
  public barChartColors = [
    { backgroundColor: 'pink' },

  ]
 

  constructor(private viewportscroller:ViewportScroller,private songservice:SongslistService ,private pservice:PlaylistService,private formBuilder:FormBuilder,private route:Router) { }
  a:boolean=false; 
b:boolean=false;
c:boolean=false; 
d:boolean=false; 
test="hello";
datasi:any=[];
labelsi:any=[]; 
omg:any=[];
  allsong: any;
  counts:number=0;
  see:any=0;
  lets:any=[];
  representwhichplaylist:any;
  enablechecktodelete:boolean=false;
  enablecheckboxtocreateplaylist:boolean=false;
  enabletoaddsongstoexistinglist:boolean=false;
  genre:any=['Jazz','Rock','Hip-Hop','Dance','Romantic','Rhythm','Country','Electro','Indie']
  i:any;
  list:any;
  todeletesongsinplaylist:any;
  samplebuttoncreate=true;
  leave:boolean=true;
 query:any;
  top:any;
  control:any;
  exs:any=[];
  titles:any=[];
  albums:any=[];
  singerss:any=[];
  genres:any=[];
  urls:any=[];
  x:any=[];
  namees:any=[];
  lengths:any=[];
  enabletocreate=false;
  showplaylistsongs:boolean=false;
  allplaylistsongs:any;
  playlistsnames:any=[];
customtop:any=['1','3','5','10']
  topten:any;
  enable2tab:boolean=false;
  play={
    playlistname:'',
    songs:[],
    id:'',
  }
  songobj={
    title:'',
      album: '',
      singers: '',
      length:'',
      genre:'',
      url:''
  }
 playlistform= new FormGroup({});

  
 lists:any=[];
  songform = new FormGroup({
    title: new FormControl(''),
   album:new FormControl(''),
   singers:new FormControl(''),
   length:new FormControl(''),
   genre:new FormControl(''),
   url:new FormControl('')

  });
 
  ngOnInit(): void {  this.getlsong();
    
    this.pservice.getallsongsfromplaylists().subscribe((response)=>{
      this.allplaylistsongs=response; 

    this.barChartData = [
      { data: this.allplaylistsongs.map((a: { count: any; }) => a.count), label: 'playlist views'},]
   this.barChartLabels = this.allplaylistsongs.map((a: { playlistname: any; }) => a.playlistname);})



   this.getlsongfromplaylist();
    this.playlistform=this.formBuilder.group({
      playlistname:[''],
      songs:this.formBuilder.array([]),
      count:(0),
    })
   
    this.songform=this.formBuilder.group({
      title:[ '',[Validators.required,Validators.minLength(4)]],
      album:['',[Validators.required,Validators.minLength(4)]],
      singers:[''],
length:[''],
genre:[''],
url:['']
    })  
  }

  deleteSong(song :any){
    
    this.pservice.deleteSong(song).subscribe(()=>{
      this.getlsong();
    })
  }
  editSong(song :any){
    this.nextStep();
    this.songobj=song;
   this.enable2tab=true;
  }
  updateSong(){
   this.leave=false;
    this.nextstep();
    this.pservice.updateSong(this.songobj).subscribe(()=>{
      this.getlsong();
    }) 
    this.songform.reset();
    this.enable2tab=!this.enable2tab;
  }
  getlsong(){
    this.pservice.getallsong().subscribe((response)=>{
      this.allsong=response;
    })
  }
  selectedIndex: number = 0;
  nextStep() {
     if (this.selectedIndex != 3) {
       this.selectedIndex = this.selectedIndex + 1;
     }
   }
  nextstep() {
    if (this.selectedIndex != 3) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
createplaylist(formObj:any){
  this.samplebuttoncreate=!this.samplebuttoncreate;
this.enablecheckboxtocreateplaylist=!this.enablecheckboxtocreateplaylist;
this.pservice.sendnewsong(this.playlistform.value).subscribe((response)=>{
  this.getlsong;
})
}

selectedsongs(e:any,song:any){
  const songsFormArray=<FormArray>this.playlistform.controls.songs
if(e.target.checked){
  songsFormArray.push(new FormControl(song)); 
}else{
  let index= songsFormArray.controls.findIndex(x=>x.value=={song})
  songsFormArray.removeAt(index);
}
}
getcustom(i:any){
this.topten=i.target.value;
this. allplaylistsongs.sort((a: { count: number; },b: { count: number; })=>(a.count>b.count? -1 : 1));
   
this.datasi.splice(0, this.datasi.length);
this.labelsi.splice(0 , this.labelsi.length); 
 for(let i=0;i<this.topten;i++){
    
   this.deletesongsfromselectedplaylist;
 this.datasi.push(this.allplaylistsongs[i].count);
 this.labelsi.push(this.allplaylistsongs[i].playlistname);

 }
 this.barChartData=[
   { data: this.datasi, label:"Top playlists views"}
 ];
this. barChartLabels=this.labelsi;
this.getlsongfromplaylist();
}

getlsongfromplaylist(){
  this.pservice.getallsongsfromplaylists().subscribe((response)=>{
    this.allplaylistsongs=response; 
  
        });
      
    }


deletesongsfromselectedplaylist(playlist:any,list:any){
  this.todeletesongsinplaylist=playlist;
  this.enablechecktodelete=!this.enablechecktodelete;
  this.viewplaylist(playlist,list);
}
addsongtoselectedplaylist(playlist:any){
this.enabletoaddsongstoexistinglist=!this.enabletoaddsongstoexistinglist;
this.representwhichplaylist=playlist;
window.scrollTo(10,10)
}
selectsongstoaddtoselectedplaylist(e:any,song:any)
{
  const songsFormArray=<FormArray>this.representwhichplaylist.songs
  if(e.target.checked){
    songsFormArray.push(song);
    this.pservice.updatesongsinplaylist(this.representwhichplaylist).subscribe(()=>{
      this.getlsongfromplaylist();
    })
  }
}
deleteselectedsongfromplaylist(e:any,song:any){
  this.list=<FormArray>this.todeletesongsinplaylist.songs;
   for(let i=0;i<=this.list.length;i++){
if(e.target.checked&&this.list[i].id==song.id){
  this.list.splice(i,1);
  this.pservice.updatesongsinplaylist(this.todeletesongsinplaylist).subscribe(()=>{
  this.getlsongfromplaylist();
  })
}
}
}
deleteasongfromplaylist(song:any,alls:any){
  this.omg=<FormArray>alls.songs;

  for(let i=0;i<=this.omg.length;i++){
    if(this.omg[i].id==song.id){
      this.omg.splice(i,1);
      this.pservice.updatesongsinplaylist(alls).subscribe(()=>{
      this.getlsongfromplaylist();
      })
    }
    }
}
editsong(song :any,exs:any){
  this.nextStep();
  this.songobj=song;
  this.lists=exs;
 this.enable2tab=true;
}
viewplaylist(song:any,list:any){
  this.viewportscroller.scrollToAnchor(list);
  this.showplaylistsongs=true;
  this.pservice.getlistbyid(song).subscribe((response)=>{
    this.lists=response;
    this.exs=this.lists;
    this.lists.count++;
    this.pservice.updatesongsinplaylist(this.lists).subscribe(()=>{
      this.getlsongfromplaylist();
    })
  })

}
gotoplaylists(list:any){
  this.viewportscroller.scrollToAnchor(list);
}
deleteplaylist(song:any){
  this.pservice.deletesong(song).subscribe(()=>{
    this.getlsongfromplaylist();
  })
}
canDeactivate (): boolean{
 
  if( (this.songform.touched&&this.songform.dirty &&this.songform.invalid)||(this.leave&&this.songform.valid)){
    return false;}
    else{
      return true;
    }
  }
  enablecheck(){
    this.enablecheckboxtocreateplaylist=!this.enablecheckboxtocreateplaylist;
    this.samplebuttoncreate=!this.samplebuttoncreate;
  }
  gotoup(){         
    window.scrollTo(10,10)
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


          }