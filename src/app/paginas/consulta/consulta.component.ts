import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  url: string | undefined;
  resultadoBool: boolean | undefined;
  notFound: boolean = false;

  constructor(private httpClient: HttpClient) {}

  onSubmit(): void {
    console.log('aa');
    this.consulta().subscribe({ next: resu => {
      if(resu.data.length === 0){
        this.notFound = true
        this.resultadoBool = undefined
      }else{
        this.resultadoBool = resu.data[0].resultado
        this.notFound = false
      }
    } });

    /* var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/noticias/consultar?url=a", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */
  }
  consulta(): Observable<{ data: { resultado: boolean }[] }> {
    const params = new HttpParams({ fromString: 'url=' + this.url });
    return this.httpClient
      .get<{ data: any }>('/api/noticias/consultar', { params })
      .pipe(
        map((response) => response)
      );
  }
}
