/**
 * Xiao Lin
 * url: https://github.com/NicopandaLim/web-services
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GiphyService {
  apiKey = `HXxxu4R0z04gn2jzxiam17ZqoN6AmOpm`;
  url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=5&offset=0&rating=G&lang=en`;
  imgs: any[];

  constructor(private http: HttpClient) {
    //this.imgs = [];
   }

  async giphySearch(text: string) {
    this.imgs = [];
    const query = `${this.url}&q=${text}`;
    await this.http.get(query)
      .toPromise()
      .then((res:any) => {
        console.log("GIPHY RESULTS");
        console.log(res);
        console.log("GIPHY RESULTS");

        res['data'].map(img => this.imgs.push(img['images']['original']['url']));
      }).catch((e: any) => {
        console.log('Giphy Search Something Went Wrong!');
        console.log(e);
      });

      return this.imgs;
  }
 
}
