import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenViewComponent } from './kitten-view.component';

describe('KittenViewComponent', () => {
  let component: KittenViewComponent;
  let fixture: ComponentFixture<KittenViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittenViewComponent]
    });
    fixture = TestBed.createComponent(KittenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
