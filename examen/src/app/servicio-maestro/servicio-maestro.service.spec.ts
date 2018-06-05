import { TestBed, inject } from '@angular/core/testing';

import { ServicioMaestroService } from './servicio-maestro.service';

describe('ServicioMaestroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioMaestroService]
    });
  });

  it('should be created', inject([ServicioMaestroService], (service: ServicioMaestroService) => {
    expect(service).toBeTruthy();
  }));
});
