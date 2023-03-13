import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'], //um array de string, podemos ter mais de um component
})
export class NovaTransferenciaComponent {
  //para quando enviar um valor e um destino, quero que retorne uma mensagem no meu console
  //para isso vou criar umm método chamado "transferir"
  valor: number; //propriedade valor
  destino: number;

  transferir() {
    //quando clicar no botão quero que esse método seja invocado
    console.log('Solicitada nova transferência')
    console.log('valor: ', this.valor)
    console.log('destino: ', this.destino)
  }
}
