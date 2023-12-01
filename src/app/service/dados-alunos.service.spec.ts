import { TestBed } from '@angular/core/testing';

import { DadosAlunosService } from './dados-alunos.service';

describe('DadosAlunosService', () => {
  let service: DadosAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
