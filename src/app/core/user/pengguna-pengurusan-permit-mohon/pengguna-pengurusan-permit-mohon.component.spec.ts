import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaPengurusanPermitMohonComponent } from './pengguna-pengurusan-permit-mohon.component';

describe('PenggunaPengurusanPermitMohonComponent', () => {
  let component: PenggunaPengurusanPermitMohonComponent;
  let fixture: ComponentFixture<PenggunaPengurusanPermitMohonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaPengurusanPermitMohonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaPengurusanPermitMohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
