import { Routes } from '@angular/router';
import { SearchThings } from './search-things/search-things';
import { App } from './app';

export const routes: Routes = [
    {path: '', component:App, title: 'Home Page'},

    {path: 'Search', component:SearchThings, title: 'Search Page'}
];
