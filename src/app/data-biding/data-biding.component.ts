import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public nome: string = "Gustavo";
  public idade: number = 30;
  public checkedDisabled: boolean = true;
  public position: { x: number, y: number } = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {}

  public alertaInfo() {
    alert("Evento de click")
  }

  public mouseEvent(valor: MouseEvent) {
    console.log('Evento do botao => ', valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    console.log('Evento do move => ', valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
