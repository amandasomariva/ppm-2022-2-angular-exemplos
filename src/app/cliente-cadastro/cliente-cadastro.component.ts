import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente/cliente.interface';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  clienteForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    cpf: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    endereco: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    ],
    nascimento: '2004-01-01',
    telefone: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.clienteService.getCliente(id).subscribe((cliente) => {
        console.log(cliente);
        this.clienteForm.patchValue(cliente);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.clienteForm.valid);
    console.log(this.clienteForm.value);

    const cliente: Cliente = this.clienteForm.value;

    if (cliente.id) {
      this.clienteService.update(cliente).subscribe(() => this.redirect());
    } else {
      this.clienteService.save(cliente).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagem']);
  }
}
