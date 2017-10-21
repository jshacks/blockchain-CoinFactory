import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Coin as ICoin } from '../../interfaces'
import { API_URL} from '../../config'

@Component({
  selector: 'index',
  styleUrls: ['./index.scss'],
  templateUrl: './index.html'
})


export class Coin {

  coins : ICoin[]
  constructor(private http: Http) { }
  ngOnInit(){

    this.http.get(`//${API_URL}/coin`).map(res => res.json()).subscribe(coins => this.coins = coins)
  }

}
