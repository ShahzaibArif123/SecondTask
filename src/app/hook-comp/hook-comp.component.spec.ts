import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookCompComponent } from './hook-comp.component';

describe('HookCompComponent', () => {
  let component: HookCompComponent;
  let fixture: ComponentFixture<HookCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HookCompComponent]
    });
    fixture = TestBed.createComponent(HookCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
