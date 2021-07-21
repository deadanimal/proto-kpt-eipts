import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaPengurusanPermitSemakComponent } from './pengguna-pengurusan-permit-semak.component';

describe('PenggunaPengurusanPermitSemakComponent', () => {
  let component: PenggunaPengurusanPermitSemakComponent;
  let fixture: ComponentFixture<PenggunaPengurusanPermitSemakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaPengurusanPermitSemakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaPengurusanPermitSemakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
