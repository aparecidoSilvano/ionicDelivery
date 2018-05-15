import { RequestsPage } from './../requests/requests';
import { Component } from '@angular/core';

import { LocationPage } from './../location/location';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LocationPage;
  tab3Root = RequestsPage;

  constructor() {

  }
}
