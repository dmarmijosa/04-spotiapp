import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify services listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCO3tmrbAIul9Sl63dIB2iJJD3bRwyb34yXKwKFTaAYpIUhndUHDCu_IY-X0BhetMtjjVj_AQmrxAWoXZA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});

  }
  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCO3tmrbAIul9Sl63dIB2iJJD3bRwyb34yXKwKFTaAYpIUhndUHDCu_IY-X0BhetMtjjVj_AQmrxAWoXZA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
