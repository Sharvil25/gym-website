import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCloneComponent } from './gallery-clone.component';

describe('GalleryCloneComponent', () => {
  let component: GalleryCloneComponent;
  let fixture: ComponentFixture<GalleryCloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryCloneComponent]
    });
    fixture = TestBed.createComponent(GalleryCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
