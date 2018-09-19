import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {FruitComponent} from './fruit/fruit.component';

const routes: Routes = [
  {path: '', redirectTo: 'fruit', pathMatch: 'full' },
  {path: 'fruit', component: FruitComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
