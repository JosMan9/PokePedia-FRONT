import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barra-titulo',
  templateUrl: './barra-titulo.component.html',
  styleUrls: ['./barra-titulo.component.scss']
})
export class BarraTituloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desplegarBayas(elementoBayas: HTMLElement) {
    //elementoBayas.style.backgroundColor = "red";
    elementoBayas.style.display = "inline-block";
  }

  contraerBayas(elementoBayas: HTMLElement) {
    // elementoBayas.style.backgroundColor = "blue";
    elementoBayas.style.display = "none";
  }

  contraerConcursos(elementoConcursos: HTMLElement) {
    elementoConcursos.style.display = "none";
  }
  desplegarConcursos(elementoConcursos: HTMLElement) {
    elementoConcursos.style.display = "inline-block";
  }

  contraerEncuentros(elementoEncuentros: HTMLElement) {
    elementoEncuentros.style.display = "none";
  }
  desplegarEncuentros(elementoEncuentros: HTMLElement) {
    elementoEncuentros.style.display = "inline-block"
  }


}
