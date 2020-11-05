import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify services listo');
  }
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer QB58W7WkjN5F8i4TvmkM_OtLHnAVx0CEmdFvqecHi1fo3tFVyN3ODKhqPhyVk_0PSWyuwICWu6WPFTllvI'
    });
    return this.http.get(url,{headers});

  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data=> data['albums'].items));

  }
  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data=>data['artists'].items));
  }
  getArtista(id:string){
    
    return this.getQuery(`artists/${id}`)
               //.pipe(map(data=>data['artists'].items));
  }
  getTopTrack(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
                .pipe(map(data=>data['tracks']));
  }
}
