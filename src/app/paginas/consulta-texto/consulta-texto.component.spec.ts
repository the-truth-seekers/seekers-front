import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTextoComponent } from './consulta-texto.component';

describe('ConsultaTextoComponent', () => {
  let component: ConsultaTextoComponent;
  let fixture: ComponentFixture<ConsultaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
