import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReservasComponent } from './detalle-reservas.component';

describe('DetalleReservasComponent', () => {
  let component: DetalleReservasComponent;
  let fixture: ComponentFixture<DetalleReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
