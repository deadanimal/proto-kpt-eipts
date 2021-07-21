import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDaftarKetuaEksekutifDaftarComponent } from './pengguna-daftar-ketua-eksekutif-daftar.component';

describe('PenggunaDaftarKetuaEksekutifDaftarComponent', () => {
  let component: PenggunaDaftarKetuaEksekutifDaftarComponent;
  let fixture: ComponentFixture<PenggunaDaftarKetuaEksekutifDaftarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaDaftarKetuaEksekutifDaftarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaDaftarKetuaEksekutifDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
