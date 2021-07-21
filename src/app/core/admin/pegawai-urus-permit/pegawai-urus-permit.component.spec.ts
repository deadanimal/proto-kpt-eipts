import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiUrusPermitComponent } from './pegawai-urus-permit.component';

describe('PegawaiUrusPermitComponent', () => {
  let component: PegawaiUrusPermitComponent;
  let fixture: ComponentFixture<PegawaiUrusPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiUrusPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiUrusPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
