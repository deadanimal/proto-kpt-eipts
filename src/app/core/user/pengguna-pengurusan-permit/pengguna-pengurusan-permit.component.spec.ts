import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaPengurusanPermitComponent } from './pengguna-pengurusan-permit.component';

describe('PenggunaPengurusanPermitComponent', () => {
  let component: PenggunaPengurusanPermitComponent;
  let fixture: ComponentFixture<PenggunaPengurusanPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaPengurusanPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaPengurusanPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
