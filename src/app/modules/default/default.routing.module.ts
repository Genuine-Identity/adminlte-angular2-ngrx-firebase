import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/component/login.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/component/terms-and-conditions.component';

import { DefaultComponent } from './default.component';
import { UnderConstructionComponent } from './Under-Construction/component/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: UnderConstructionComponent, },
      { path: 'login', component: LoginComponent, },
      { path: 'terms-and-conditions', component: TermsAndConditionsComponent, },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class DefaultRoutingModule { }