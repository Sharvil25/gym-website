import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutCloneComponent } from './about-clone/about-clone.component';
import { ClasscloneComponent } from './classclone/classclone.component';
import { BlogcloneComponent } from './blogclone/blogclone.component';
import { ContactcloneComponent } from './contactclone/contactclone.component';
import { GalleryCloneComponent } from './gallery-clone/gallery-clone.component';

const routes: Routes = [
  {
    path : "", redirectTo:"Home",pathMatch:"full"
  },

  {
    path : "Home",component:HomeComponent
  },

  {
    path : "AboutClone",component:AboutCloneComponent
  },

  {
    path : "Classes",component:ClasscloneComponent
  },

  {
    path : "Blog",component:BlogcloneComponent
  },

  {
    path : "Gallery",component:GalleryCloneComponent
  },

  {
    path : "Contact",component:ContactcloneComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
