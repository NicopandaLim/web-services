import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  searches: any[] = [];
  searchRecord: string;

  constructor() {
    // this.searches = [];
  }

  addSearchText(text: string) {
    this.searches.push({searchText: text, createdAt: new Date()});
  }

  getSearchHistory() {
    return of(this.searches);  // emitting a sequence of numbers, objs, funcs: Observable
  }

}
