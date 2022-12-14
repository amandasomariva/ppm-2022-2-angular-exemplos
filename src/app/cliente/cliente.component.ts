import { Component, Inject, OnInit } from '@angular/core';
import { Cliente } from './cliente.interface';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(cliente: Cliente) {
    this.clienteService.remove(cliente).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

}
