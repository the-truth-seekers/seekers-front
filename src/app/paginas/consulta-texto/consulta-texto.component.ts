import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-consulta-texto',
  templateUrl: './consulta-texto.component.html',
  styleUrls: ['./consulta-texto.component.scss'],
})
export class ConsultaTextoComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  text?: string;
  resultadoBool: boolean | undefined;
  inconclusivo: boolean = false;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if(this.text){
      this.consulta().subscribe({
        next: (resu) => {
          this.resultadoBool = resu.resposta_analisada;
          this.inconclusivo = this.resultadoBool === undefined;
        },
        error(err: Error) {
          alert(err.message)
        },
      });
    }else{
      alert("preencher campo de texto")
    }


    /*  var requestOptions = {
      method: 'GET'
    };

    fetch(this.url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */
  }
  consulta(): Observable<{'resultado': string, 'resposta_analisada': boolean, 'probabilidades': string}> {
    const params = new HttpParams();
    return this.httpClient
      .post<{'resultado': string, 'resposta_analisada': boolean, 'probabilidades': string}>('/api/predicao/', {"texto": this.text}, {params})
      .pipe(map((response) => response));
  }
}
