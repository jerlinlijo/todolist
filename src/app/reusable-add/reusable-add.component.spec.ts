import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableAddComponent } from './reusable-add.component';

describe('ReusableAddComponent', () => {
  let component: ReusableAddComponent;
  let fixture: ComponentFixture<ReusableAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableAddComponent]
    });
    fixture = TestBed.createComponent(ReusableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
