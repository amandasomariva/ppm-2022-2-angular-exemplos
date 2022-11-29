import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemCadastroComponent } from './passagem-cadastro.component';

describe('PassagemCadastroComponent', () => {
  let component: PassagemCadastroComponent;
  let fixture: ComponentFixture<PassagemCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagemCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagemCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
