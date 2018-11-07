import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WikiService } from '../services/wiki.service';
import { SearchHistoryService } from '../services/search-history.service';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;
  result: string;
  titles: any;
  imgs: any;
  case: any;

  constructor(private router: Router,
              private wikiService: WikiService,
              private historyService: SearchHistoryService,
              private giphyService: GiphyService) {
    this.result = '';
    this.case = 0;
    }

async wikiSearch(searchText: string) {

  if (searchText == '' || !searchText.replace(/\s/g, '').length) {  // text is empty or just spaces
    this.router.navigate(['/']);    // if something invalid, redirect to app component
    return;
  }
  this.case = "1";
  this.titles = '';
  this.searchText = searchText;
  console.log(searchText);
  this.titles = await this.wikiService.wikiSearch(searchText);
  this.saveHistory();  
}

async giphySearch(searchText: string) {

  if (searchText == '' || !searchText.replace(/\s/g, '').length) {
    this.router.navigate(['/']); 
    return;
  }
  this.case = "2";
  this.searchText = searchText;
  console.log(searchText);
  this.imgs = await this.giphyService.giphySearch(searchText);
  console.log(this.imgs);
  this.saveHistory(); 
}
 
saveHistory() {
this.historyService.addSearchText(this.searchText);
}

  ngOnInit() {
  }

}
