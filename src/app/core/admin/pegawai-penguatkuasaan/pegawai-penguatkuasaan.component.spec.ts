import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiPenguatkuasaanComponent } from './pegawai-penguatkuasaan.component';

describe('PegawaiPenguatkuasaanComponent', () => {
  let component: PegawaiPenguatkuasaanComponent;
  let fixture: ComponentFixture<PegawaiPenguatkuasaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiPenguatkuasaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiPenguatkuasaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
