import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUSBannerComponent } from './contact-usbanner.component';

describe('ContactUSBannerComponent', () => {
  let component: ContactUSBannerComponent;
  let fixture: ComponentFixture<ContactUSBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUSBannerComponent]
    });
    fixture = TestBed.createComponent(ContactUSBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
