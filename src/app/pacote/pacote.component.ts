import { Component, OnInit } from '@angular/core';
import { Pacote } from './pacote.interface';
import { PacoteService } from './pacote.service';

@Component({
  selector: 'pacote',
  templateUrl: './pacote.component.html',
  styleUrls: ['./pacote.component.css']
})
export class PacoteComponent implements OnInit {

  pacotes: Pacote[] = [];

  constructor(private pacoteService: PacoteService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.pacoteService.getPacotes().subscribe(
      (pacotes) => {
        this.pacotes = pacotes;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(pacote: Pacote) {
    this.pacoteService.remove(pacote).subscribe(
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
