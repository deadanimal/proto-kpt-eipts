import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiPemantauanComponent } from './pegawai-pemantauan.component';

describe('PegawaiPemantauanComponent', () => {
  let component: PegawaiPemantauanComponent;
  let fixture: ComponentFixture<PegawaiPemantauanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiPemantauanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiPemantauanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
