import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produkts } from './produkts';

describe('Produkts', () => {
  let component: Produkts;
  let fixture: ComponentFixture<Produkts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Produkts],
    }).compileComponents();

    fixture = TestBed.createComponent(Produkts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
