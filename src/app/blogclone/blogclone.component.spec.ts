import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcloneComponent } from './blogclone.component';

describe('BlogcloneComponent', () => {
  let component: BlogcloneComponent;
  let fixture: ComponentFixture<BlogcloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogcloneComponent]
    });
    fixture = TestBed.createComponent(BlogcloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
