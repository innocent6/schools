import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSearchComponent } from './shule-search.component';

describe('ShuleSearchComponent', () => {
  let component: ShuleSearchComponent;
  let fixture: ComponentFixture<ShuleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
