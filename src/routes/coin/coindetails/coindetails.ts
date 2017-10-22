import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { API_URL } from '../../../config'
import { Coin } from '../../../interfaces'
import * as moment from 'moment'
import * as ark from 'arkjs'
import * as bip39 from 'bip39'
import * as fileSaver from 'file-saver'

@Component({
  selector: 'coindetails',
  styleUrls: ['./coindetails.scss'],
  templateUrl: './coindetails.html'
})


export class CoinDetails {
  id: string
  selectedValue
  ark = 'ARK'
  showForm: boolean = false
  coin: Coin
  date: Date
  imgUrl = '../assets/img/graph.png'
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.showForm = true

      this.http.get(`//${API_URL}/coin/${this.id}`).map(res => res.json()).subscribe(coin => {
        this.coin = coin
        let date = `${this.coin.constants.date.year}-${this.coin.constants.date.month}-${this.coin.constants.date.day} ${this.coin.constants.date.hour}:00`
        console.log(date)
        this.date = moment(date).toDate()
      })
    } else {
      this.coin = JSON.parse(`{
        "createGenesis": {
          "totalPremine": 0,
          "numberOfDelegates": 0,
          "genesisAcounts" : []
        },
        "networkjson": {
          "token": "",
          "pubKeyHash": 0,
          "symbol": ""
        },
        "constants" : {
          "date": {
            "year" : "",
            "month": "",
            "day": "",
            "hour": ""
          }
        }
      }`)
    }
  }

  add() {

    let data = {
      address: '',
      totalCoins: 0
    }
    this.coin.createGenesis.genesisAcounts.push(data)
  }

  remove(account, position) {
    this.coin.createGenesis.genesisAcounts.splice(position, 1)
  }
  drop() {
    console.log(this.selectedValue)
    this.showForm = true
  }
  save(coin) {
    let id = coin["_id"]
    this.coin.constants.date.year = moment(this.date).get('year').toString()
    this.coin.constants.date.month = moment(this.date).get('month').toString()
    this.coin.constants.date.month = (+this.coin.constants.date.month + 1).toString()
    this.coin.constants.date.day = moment(this.date).get('date').toString()
    this.coin.constants.date.hour = moment(this.date).get('hour').toString()

    console.log("coin: ", this.coin)

    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'text/plain' }) });


    if (id) {
      this.http.put(`//${API_URL}/coin/${id}`, coin, options).subscribe(contract => console.log('Updated'))
    } else {
      this.http.post(`//${API_URL}/coin`, coin, options).subscribe(contract => console.log('created'))
    }

  }
  downloadZip(coin: Coin) {
    let type = 'application/zip'
    let options = new RequestOptions({
      responseType: ResponseContentType.ArrayBuffer,
      headers: new Headers([{ 'Accept': type },{'Access-Control-Allow-Origin':'*'}])

    });
    this.http.get(`https://transfer.sh/SVNGY/coin.zip`, options)
      .subscribe(data => fileSaver.saveAs(data.arrayBuffer(), `${coin.networkjson.token}.zip`),
      error => console.log(error));
  }

}
