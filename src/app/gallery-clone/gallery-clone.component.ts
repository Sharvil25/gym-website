import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-clone',
  templateUrl: './gallery-clone.component.html',
  styleUrls: ['./gallery-clone.component.css'],
})
export class GalleryCloneComponent {
  imagesData = [
    {
      image: 'assets/images/blog-5.jpg.webp',
      types: ['all', 'fitness'],
    },
    {
      image: 'assets/images/blog-8.jpg.webp',
      types: ['all', 'fitness', 'coaching'],
    },
    {
      image: 'assets/images/classes-4.jpg.webp',
      types: ['all', 'coaching'],
    },
    {
      image: 'assets/images/classes-6.jpg.webp',
      types: ['all', 'coaching',"event"],
    },
    {
      image: 'assets/images/classes-3.jpg.webp',
      types: ['all', 'other', 'fitness'],
    },
    {
      image: 'assets/images/blog-6.jpg.webp',
      types: ['all', 'other', 'event'],
    },
    {
      image: 'assets/images/classes-1.jpg.webp',
      types: ['all', 'event'],
    },
  ];
  filteredImages = this.imagesData;

  setFilteredImages = (type: string) => {
    this.filteredImages = this.imagesData.filter((image) =>
      image.types.includes(type)
    );
  };
}
