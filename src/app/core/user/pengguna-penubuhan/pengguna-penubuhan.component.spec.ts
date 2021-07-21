import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaPenubuhanComponent } from './pengguna-penubuhan.component';

describe('PenggunaPenubuhanComponent', () => {
  let component: PenggunaPenubuhanComponent;
  let fixture: ComponentFixture<PenggunaPenubuhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaPenubuhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaPenubuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
