/**
 * Xiao Lin
 * url: https://github.com/NicopandaLim/web-services
 */

import { Component, OnInit } from '@angular/core';
import { SearchHistoryService  } from '../services/search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searches: any[];

  constructor(
              private historyService: SearchHistoryService) { 
    this.searchHistory();
              }

  searchHistory() {
    this.historyService.getSearchHistory().subscribe((search: any) => {
      this.searches = search;
    });
  }

  ngOnInit() { }

}
