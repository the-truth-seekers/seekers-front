import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConsultaComponent } from './paginas/consulta/consulta.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './paginas/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaTextoComponent } from './paginas/consulta-texto/consulta-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConsultaComponent,
    HomeComponent,
    ConsultaTextoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
