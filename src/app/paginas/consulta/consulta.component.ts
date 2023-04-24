import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  url: string | undefined;
  resultadoBool: boolean | undefined;
  resultadoPorcentagem: number | undefined;

  onSubmit(): void {
    if(this.url == "https://g1.globo.com/mundo/noticia/2023/04/23/dragao-de-10-metros-pega-fogo-durante-show-em-parque-da-disney-na-california-video.ghtml"){
      this.resultadoBool = false;
      this.resultadoPorcentagem = Math.floor(Math.random() * (99 - 80 + 1)) + 80
    }else{
      this.resultadoBool = true;
      this.resultadoPorcentagem = Math.floor(Math.random() * (60 - 20 + 1)) + 20
    }

  }

}
