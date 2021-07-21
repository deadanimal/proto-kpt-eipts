import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiPenubuhanComponent } from './pegawai-penubuhan.component';

describe('PegawaiPenubuhanComponent', () => {
  let component: PegawaiPenubuhanComponent;
  let fixture: ComponentFixture<PegawaiPenubuhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiPenubuhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiPenubuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
