import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Passagem } from '../passagem/passagem.interface';
import { PassagemService } from '../passagem/passagem.service';

@Component({
  selector: 'app-passagem-cadastro',
  templateUrl: './passagem-cadastro.component.html',
  styleUrls: ['./passagem-cadastro.component.css']
})
export class PassagemCadastroComponent implements OnInit {

  passagemForm: FormGroup = this.formBuilder.group({
    id: 0,
    dataIda:'2022-12-01',
    dataVolta: '2023-01-01',
    origem: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    destino: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    tipoPassagem: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private passagemService: PassagemService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.passagemService.getPassagem(id).subscribe((passagem) => {
        console.log(passagem);
        this.passagemForm.patchValue(passagem);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.passagemForm.valid);
    console.log(this.passagemForm.value);

    const passagem: Passagem = this.passagemForm.value;

    if (passagem.id) {
      this.passagemService.update(passagem).subscribe(() => this.redirect());
    } else {
      this.passagemService.save(passagem).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listagemPassagem']);
  }
 

}
