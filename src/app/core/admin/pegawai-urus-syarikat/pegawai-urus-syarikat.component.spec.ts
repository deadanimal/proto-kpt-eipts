import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiUrusSyarikatComponent } from './pegawai-urus-syarikat.component';

describe('PegawaiUrusSyarikatComponent', () => {
  let component: PegawaiUrusSyarikatComponent;
  let fixture: ComponentFixture<PegawaiUrusSyarikatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiUrusSyarikatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiUrusSyarikatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
