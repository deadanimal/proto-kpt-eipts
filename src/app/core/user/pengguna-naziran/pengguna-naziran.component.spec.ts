import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaNaziranComponent } from './pengguna-naziran.component';

describe('PenggunaNaziranComponent', () => {
  let component: PenggunaNaziranComponent;
  let fixture: ComponentFixture<PenggunaNaziranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaNaziranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaNaziranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
