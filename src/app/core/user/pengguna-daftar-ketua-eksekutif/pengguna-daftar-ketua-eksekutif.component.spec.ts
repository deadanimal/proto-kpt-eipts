import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDaftarKetuaEksekutifComponent } from './pengguna-daftar-ketua-eksekutif.component';

describe('PenggunaDaftarKetuaEksekutifComponent', () => {
  let component: PenggunaDaftarKetuaEksekutifComponent;
  let fixture: ComponentFixture<PenggunaDaftarKetuaEksekutifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaDaftarKetuaEksekutifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaDaftarKetuaEksekutifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
