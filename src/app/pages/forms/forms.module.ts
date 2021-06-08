import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { FormsRoutingModule } from './forms-routing.module';
import { BuscaComponent } from './busca/busca.component';
import { SubeComponent } from './sube/sube.component';
import { AnalizaComponent } from './analiza/analiza.component';
import { IniciaComponent } from './inicia/inicia.component';
import { TipcoinSaldoComponent } from './tipcoin-saldo/tipcoin-saldo.component';
import { TipcoinSimulaComponent } from './tipcoin-simula/tipcoin-simula.component';
import { TipcoinRegalaComponent } from './tipcoin-regala/tipcoin-regala.component';
import { CreceInvierteTipcoinComponent } from './crece-invierte-tipcoin/crece-invierte-tipcoin.component';
import { CuidaAhorraTipcoinComponent } from './cuida-ahorra-tipcoin/cuida-ahorra-tipcoin.component';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbCheckboxModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    FormsRoutingModule
  ],
  declarations: [
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
    IniciaComponent,
    TipcoinSaldoComponent,
    TipcoinSimulaComponent,
    TipcoinRegalaComponent,
    CreceInvierteTipcoinComponent,
    CuidaAhorraTipcoinComponent,
  ],
  exports: [
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
    IniciaComponent,
    TipcoinSaldoComponent,
    TipcoinSimulaComponent,
    TipcoinRegalaComponent,
    CreceInvierteTipcoinComponent,
    CuidaAhorraTipcoinComponent,
  ]
})
export class FormsModule { }
