import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCloneComponent } from './about-clone.component';

describe('AboutCloneComponent', () => {
  let component: AboutCloneComponent;
  let fixture: ComponentFixture<AboutCloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCloneComponent]
    });
    fixture = TestBed.createComponent(AboutCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
