import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiDaftarKetuaComponent } from './pegawai-daftar-ketua.component';

describe('PegawaiDaftarKetuaComponent', () => {
  let component: PegawaiDaftarKetuaComponent;
  let fixture: ComponentFixture<PegawaiDaftarKetuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiDaftarKetuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiDaftarKetuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
