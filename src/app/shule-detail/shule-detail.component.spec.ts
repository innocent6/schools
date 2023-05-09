import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleDetailComponent } from './shule-detail.component';

describe('ShuleDetailComponent', () => {
  let component: ShuleDetailComponent;
  let fixture: ComponentFixture<ShuleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
