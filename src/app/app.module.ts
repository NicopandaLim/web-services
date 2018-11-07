import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

import { WikiService } from './services/wiki.service';
import { GiphyService } from './services/giphy.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-root', pathMatch: 'full' },
  {path: 'search-history', component: SearchHistoryComponent},
  {path: 'search', component: SearchComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WikiService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
