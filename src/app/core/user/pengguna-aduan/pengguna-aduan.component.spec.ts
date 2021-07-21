import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaAduanComponent } from './pengguna-aduan.component';

describe('PenggunaAduanComponent', () => {
  let component: PenggunaAduanComponent;
  let fixture: ComponentFixture<PenggunaAduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaAduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaAduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
