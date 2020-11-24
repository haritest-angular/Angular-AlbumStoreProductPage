import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import {observable} from 'rxjs/Observable';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = '../assets/album.json';

  getAlbum observable<Album>(id:number)
  {
    <Album> = this._http.get(this._albumUrl).map((response)=> response.json());
  }

}
