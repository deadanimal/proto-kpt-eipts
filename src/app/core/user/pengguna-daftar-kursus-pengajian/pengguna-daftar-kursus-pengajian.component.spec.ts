import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDaftarKursusPengajianComponent } from './pengguna-daftar-kursus-pengajian.component';

describe('PenggunaDaftarKursusPengajianComponent', () => {
  let component: PenggunaDaftarKursusPengajianComponent;
  let fixture: ComponentFixture<PenggunaDaftarKursusPengajianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaDaftarKursusPengajianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaDaftarKursusPengajianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
