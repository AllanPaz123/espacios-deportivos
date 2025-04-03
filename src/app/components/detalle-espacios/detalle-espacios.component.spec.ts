import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEspaciosComponent } from './detalle-espacios.component';

describe('DetalleEspaciosComponent', () => {
  let component: DetalleEspaciosComponent;
  let fixture: ComponentFixture<DetalleEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEspaciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
