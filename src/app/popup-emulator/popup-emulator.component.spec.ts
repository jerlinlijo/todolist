import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmulatorComponent } from './popup-emulator.component';

describe('PopupEmulatorComponent', () => {
  let component: PopupEmulatorComponent;
  let fixture: ComponentFixture<PopupEmulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupEmulatorComponent]
    });
    fixture = TestBed.createComponent(PopupEmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
