import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacta } from './contacta';

describe('Contacta', () => {
  let component: Contacta;
  let fixture: ComponentFixture<Contacta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
