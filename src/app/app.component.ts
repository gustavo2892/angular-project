import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <h1>Ciclo do componente</h1>
    {{valor}}
    <br><br>
    <button (click)="adicionar()">Adicionar</button>
    <br><br>
    <button (click)="destruirComponent()">Destruir</button>
    <br><br>
    <h1>Template Data Binding</h1>
    <app-data-biding></app-data-biding>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {};

  public destruirComponent() {
    this.destruir = false;
  }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  };

  ngDoCheck(): void {
    console.log('ngDoCheck');
  };

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  };

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  };

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  };
};
