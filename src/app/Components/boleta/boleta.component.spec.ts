import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaComponent } from './boleta.component';

describe('BoletaComponent', () => {
  let component: BoletaComponent;
  let fixture: ComponentFixture<BoletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletaComponent]
    });
    fixture = TestBed.createComponent(BoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
