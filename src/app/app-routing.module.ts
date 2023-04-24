import { ConsultaComponent } from './paginas/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'consulta', pathMatch: 'full'},
  {path: 'consulta', component: ConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
