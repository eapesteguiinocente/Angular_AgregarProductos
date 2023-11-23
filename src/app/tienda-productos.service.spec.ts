import { TestBed } from '@angular/core/testing';

import { TiendaProductosService } from './tienda-productos.service';

describe('TiendaProductosService', () => {
  let service: TiendaProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
