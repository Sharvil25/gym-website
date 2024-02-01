import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcloneComponent } from './contactclone.component';

describe('ContactcloneComponent', () => {
  let component: ContactcloneComponent;
  let fixture: ComponentFixture<ContactcloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactcloneComponent]
    });
    fixture = TestBed.createComponent(ContactcloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
