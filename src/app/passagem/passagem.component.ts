import { Component, OnInit } from '@angular/core';
import { Passagem } from './passagem.interface';
import { PassagemService } from './passagem.service';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.css']
})
export class PassagemComponent implements OnInit {

  passagens: Passagem[] = [];

  constructor(private passagemService: PassagemService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.passagemService.getPassagens().subscribe(
      (passagens) => {
        this.passagens = passagens;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(passagem: Passagem) {
    this.passagemService.remove(passagem).subscribe(
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
