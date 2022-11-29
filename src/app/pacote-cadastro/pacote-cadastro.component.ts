import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacote } from '../pacote/pacote.interface';
import { PacoteService } from '../pacote/pacote.service';
import { PassagemService } from './../passagem/passagem.service';
import { Passagem } from './../passagem/passagem.interface';
import { ClienteService } from './../cliente/cliente.service';
import { Cliente } from './../cliente/cliente.interface';

@Component({
  selector: 'app-pacote-cadastro',
  templateUrl: './pacote-cadastro.component.html',
  styleUrls: ['./pacote-cadastro.component.css']
})

export class PacoteCadastroComponent implements OnInit {
  passagens: Passagem[] = [];
  clientes: Cliente[] = [];
  pacoteForm: FormGroup = this.formBuilder.group({
    id: 0,
    valor: 0,
    roteiro: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    agente: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    passagem:[],
    cliente:[]
  });

  constructor(
    private formBuilder: FormBuilder,
    private pacoteService: PacoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private passagemService: PassagemService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.pacoteService.getPacote(id).subscribe((pacote) => {
        console.log(pacote);
        this.pacoteForm.patchValue(pacote);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
   this.listPassagem();
   this.listCliente();
  }

  onSubmit() {
    console.log(this.pacoteForm.valid);
    console.log(this.pacoteForm.value);

    const pacote: Pacote = this.pacoteForm.value;

    if (pacote.id) {
      this.pacoteService.update(pacote).subscribe(() => this.redirect());
    } else {
      this.pacoteService.save(pacote).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagemPacote']);
  }

  listPassagem() {
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

  listCliente() {
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
}
