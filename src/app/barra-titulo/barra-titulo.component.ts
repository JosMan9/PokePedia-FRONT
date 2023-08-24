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
    elementoBayas.style.color = "red";
  }

}
