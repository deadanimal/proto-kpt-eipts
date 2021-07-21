import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaFaqComponent } from './pengguna-faq.component';

describe('PenggunaFaqComponent', () => {
  let component: PenggunaFaqComponent;
  let fixture: ComponentFixture<PenggunaFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
