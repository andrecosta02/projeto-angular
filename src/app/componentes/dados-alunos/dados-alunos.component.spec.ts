import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAlunosComponent } from './dados-alunos.component';

describe('DadosAlunosComponent', () => {
  let component: DadosAlunosComponent;
  let fixture: ComponentFixture<DadosAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
