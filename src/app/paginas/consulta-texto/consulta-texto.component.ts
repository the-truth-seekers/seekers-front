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

  url2?: string;
  resultadoBool: boolean | undefined;
  notFound: boolean = false;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if(this.url2){
      this.consulta().subscribe({
        next: (resu) => {
          if (resu.data.length === 0) {
            this.notFound = true;
            this.resultadoBool = undefined;
          } else {
            this.resultadoBool = resu.data[0].resultado;
            this.notFound = false;
          }
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
  consulta(): Observable<{ data: { resultado: boolean }[] }> {
    const params = new HttpParams({ fromString: 'url=' + this.url2 });
    return this.httpClient
      .get<{ data: any }>('/api/noticias/consultar', {params})
      .pipe(map((response) => response));
  }
}
