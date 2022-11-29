import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteCadastroComponent } from './pacote-cadastro.component';

describe('PacoteCadastroComponent', () => {
  let component: PacoteCadastroComponent;
  let fixture: ComponentFixture<PacoteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacoteCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacoteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
