import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDaftarKetuaEksekutifMaklumComponent } from './pengguna-daftar-ketua-eksekutif-maklum.component';

describe('PenggunaDaftarKetuaEksekutifMaklumComponent', () => {
  let component: PenggunaDaftarKetuaEksekutifMaklumComponent;
  let fixture: ComponentFixture<PenggunaDaftarKetuaEksekutifMaklumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaDaftarKetuaEksekutifMaklumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaDaftarKetuaEksekutifMaklumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
