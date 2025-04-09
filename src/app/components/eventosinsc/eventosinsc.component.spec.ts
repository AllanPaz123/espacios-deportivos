import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosinscComponent } from './eventosinsc.component';

describe('EventosinscComponent', () => {
  let component: EventosinscComponent;
  let fixture: ComponentFixture<EventosinscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosinscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosinscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
