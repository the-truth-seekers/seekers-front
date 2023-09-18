import { ConsultaComponent } from './paginas/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ConsultaTextoComponent } from './paginas/consulta-texto/consulta-texto.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'consultar-texto', component: ConsultaTextoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
