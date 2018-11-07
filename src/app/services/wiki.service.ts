import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WikiService {
  url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
  titles:any;

  constructor(private http: HttpClient) {
    //this.titles = "";
   }

  search (userInput: String) {
    return this.http.get(`${this.url}${userInput}`);   
  }

  async wikiSearch(searchText: string) {
    this.titles = '';
    console.log(searchText);

    await this.search(searchText)
        .toPromise()
        .then((wikiResults: any)=> {
        console.log('WIKI SEARCH RESULT');
        console.log(wikiResults);
        console.log('WIKI SEARCH RESULT');
        this.titles = wikiResults['query']['search'].map(ele => this.titles + ' ' + ele['title']);
        console.log(this.titles);               
    }).catch((e: any) => {
      console.log('Wiki Search Something Went Wrong!');
      console.log(e);
    });

    return  this.titles;
  }

}
