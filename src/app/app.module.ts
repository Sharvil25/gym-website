import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkoutPlansComponent } from './workout-plans/workout-plans.component';
import { UnlimitedClassesComponent } from './unlimited-classes/unlimited-classes.component';
import { ExpertTrainersComponent } from './expert-trainers/expert-trainers.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { TrainingTodayComponent } from './training-today/training-today.component';
import { MembershipPlansComponent } from './membership-plans/membership-plans.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { ContactUSBannerComponent } from './contact-usbanner/contact-usbanner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutCloneComponent } from './about-clone/about-clone.component';
import { ClasscloneComponent } from './classclone/classclone.component';
import { BlogcloneComponent } from './blogclone/blogclone.component';
import { GalleryCloneComponent } from './gallery-clone/gallery-clone.component';
import { ContactcloneComponent } from './contactclone/contactclone.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    WorkoutPlansComponent,
    UnlimitedClassesComponent,
    ExpertTrainersComponent,
    SuccessStoriesComponent,
    TrainingTodayComponent,
    MembershipPlansComponent,
    RegisterNowComponent,
    LatestBlogComponent,
    ContactUSBannerComponent,
    FooterComponent,
    HomeComponent,
    AboutCloneComponent,
    ClasscloneComponent,
    BlogcloneComponent,
    GalleryCloneComponent,
    ContactcloneComponent,
    BackgroundImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
