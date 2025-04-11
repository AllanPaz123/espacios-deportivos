import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  small: string;
  medium: string;
  large: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: CarouselImage[] = [
    {
      small: 'https://cdn.pixabay.com/photo/2016/08/31/22/20/weights-1634747_300.jpg',
      medium: 'https://cdn.pixabay.com/photo/2016/08/31/22/20/weights-1634747_600.jpg',
      large: 'https://cdn.pixabay.com/photo/2016/08/31/22/20/weights-1634747_1280.jpg',
      alt: 'Pesas de gimnasio'
    },
    {
      small: 'https://cdn.pixabay.com/photo/2020/02/01/16/01/spare-bank-4810617_300.jpg',
      medium: 'https://cdn.pixabay.com/photo/2020/02/01/16/01/spare-bank-4810617_600.jpg',
      large: 'https://cdn.pixabay.com/photo/2020/02/01/16/01/spare-bank-4810617_1280.jpg',
      alt: 'Banco de pesas'
    },
    {
      small: 'https://cdn.pixabay.com/photo/2021/10/16/21/37/garbarnia-krakow-6716097_300.jpg',
      medium: 'https://cdn.pixabay.com/photo/2021/10/16/21/37/garbarnia-krakow-6716097_600.jpg',
      large: 'https://cdn.pixabay.com/photo/2021/10/16/21/37/garbarnia-krakow-6716097_1280.jpg',
      alt: 'Gimnasio equipado'
    }
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
