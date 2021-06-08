import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';




//Pablo
import { ButtonsComponent } from './forms/buttons/buttons.component';
import { AnalizaComponent } from './forms/analiza/analiza.component';

import { BuscaComponent } from './forms/busca/busca.component';
import { SubeComponent } from './forms/sube/sube.component';


import { TipcoinRegalaComponent } from './forms/tipcoin-regala/tipcoin-regala.component';
import { TipcoinSaldoComponent } from './forms/tipcoin-saldo/tipcoin-saldo.component';
import { TipcoinSimulaComponent } from './forms/tipcoin-simula/tipcoin-simula.component';


import { CreceInvierteTipcoinComponent } from './forms/crece-invierte-tipcoin/crece-invierte-tipcoin.component';
import { CuidaAhorraTipcoinComponent }   from './forms/cuida-ahorra-tipcoin/cuida-ahorra-tipcoin.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'analiza', component: AnalizaComponent },
    { path: 'busca', component: BuscaComponent },
    { path: 'sube',  component: SubeComponent },

    { path: 'tipcoin-regala',  component: TipcoinRegalaComponent },
    { path: 'tipcoin-saldo',  component: TipcoinSaldoComponent },
    { path: 'tipcoin-simula',  component: TipcoinSimulaComponent },
    

    { path: 'crece-invierte-tipcoin',  component: CreceInvierteTipcoinComponent },
    { path: 'cuida-ahorra-tipcoin',  component: CuidaAhorraTipcoinComponent },
    

  ],

  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
