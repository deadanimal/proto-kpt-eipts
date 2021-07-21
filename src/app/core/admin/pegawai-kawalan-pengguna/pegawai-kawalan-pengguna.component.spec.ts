import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiKawalanPenggunaComponent } from './pegawai-kawalan-pengguna.component';

describe('PegawaiKawalanPenggunaComponent', () => {
  let component: PegawaiKawalanPenggunaComponent;
  let fixture: ComponentFixture<PegawaiKawalanPenggunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiKawalanPenggunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiKawalanPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
