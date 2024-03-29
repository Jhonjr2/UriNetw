import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';


interface CustomSwiperOptions extends SwiperOptions {
  rotate?: boolean;
}

@Component({
  selector: 'app-relato',
  standalone: true,
  imports: [],
  templateUrl: './relato.component.html',
  styleUrl: './relato.component.css'
})
export class RelatoComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const gallery = this.elementRef.nativeElement.querySelector('.gallery');

    function moveSlide(e: MouseEvent) {
      const slides = document.querySelectorAll('.slide');
      if (e.target instanceof Element) {
        if (e.target.matches('.next')) {
          gallery?.append(slides[0]);
        } else if (e.target.matches('.prev')) {
          gallery?.prepend(slides[slides.length - 1]);
        }
      }
    }

    this.renderer.listen('document', 'click', moveSlide);
  }
}
