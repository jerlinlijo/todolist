import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableListRenderComponent } from './reusable-list-render.component';

describe('ReusableListRenderComponent', () => {
  let component: ReusableListRenderComponent;
  let fixture: ComponentFixture<ReusableListRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableListRenderComponent]
    });
    fixture = TestBed.createComponent(ReusableListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
