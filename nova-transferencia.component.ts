import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'], 
})
export class NovaTransferenciaComponent {
  valor: number; //propriedade valor
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência')
    console.log('valor: ', this.valor)
    console.log('destino: ', this.destino)
  }
}
