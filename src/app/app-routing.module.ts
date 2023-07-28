import { GatinhosComponent } from './components/gatinhos/gatinhos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortaCadeadosComponent } from './components/porta-cadeados/porta-cadeados.component';
import { PortaCadeados2Component } from './components/porta-cadeados2/porta-cadeados2.component';
import { PortaCadeados3Component } from './components/porta-cadeados3/porta-cadeados3.component';
import { MinhaGuardaDeRota } from './guardiao';

const routes: Routes = [
  { path: '', component: PortaCadeadosComponent },
  { path: 'porta2', component: PortaCadeados2Component, canActivate: [MinhaGuardaDeRota] },
  { path: 'porta3', component: PortaCadeados3Component , canActivate: [MinhaGuardaDeRota]},
  { path: 'gatos', component: GatinhosComponent , canActivate: [MinhaGuardaDeRota]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
