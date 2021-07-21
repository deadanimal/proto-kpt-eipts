import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDaftarInstitusiComponent } from './pengguna-daftar-institusi.component';

describe('PenggunaDaftarInstitusiComponent', () => {
  let component: PenggunaDaftarInstitusiComponent;
  let fixture: ComponentFixture<PenggunaDaftarInstitusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaDaftarInstitusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaDaftarInstitusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
