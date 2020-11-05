import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {
  artista:any={};
  loading:boolean;
  topTracks:any[]=[];

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading=true;
    this.router.params.subscribe(params=>{
      
    this.getArtista(params['id']);
    this.getTopTrack(params['id']);
      
    });

   }
   getArtista(id:string){
     this.loading=true;
     this.spotify.getArtista(id)
                 .subscribe(res=>{
                   this.artista=res;
                   //console.log(res);
                   this.loading=false;
                 });


   }
   getTopTrack(id:string){
     this.loading=true;
     this.spotify.getTopTrack(id)
                 .subscribe(res=>{
                   console.log(res);
                   this.topTracks=res;
                   this.loading=false;
                 })
   }


}
