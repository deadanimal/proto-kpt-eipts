import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiDaftarInstitusiComponent } from './pegawai-daftar-institusi.component';

describe('PegawaiDaftarInstitusiComponent', () => {
  let component: PegawaiDaftarInstitusiComponent;
  let fixture: ComponentFixture<PegawaiDaftarInstitusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiDaftarInstitusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiDaftarInstitusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
