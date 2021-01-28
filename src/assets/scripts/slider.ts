import { TargetSlide } from "./models/typings";
import { Style } from "./style";
import anime from "animejs";

export function Slider() {
  let nextSlide = 1,
    activeSlide = 0,
    timerDuration = setInterval(updateSlide, 8000);
  const sliderNavigation = document.querySelectorAll('div[data-nav]');
  const slides = document.querySelectorAll('div[data-slide]');
  const sliderContainer = document.querySelector('.slider__container');
  sliderContainer.addEventListener('mouseenter',() => {
    clearInterval(timerDuration);
  });
  sliderContainer.addEventListener('mouseleave', () => {
    timerDuration = setInterval(updateSlide, 8000);
  });

  function updateSlide(targetSlide?: TargetSlide) {
    activeSlide = nextSlide;
    switch (nextSlide) {
      case 0 : default: {
        changeSlide(0, targetSlide);
        nextSlide = 1
        break;
      }
      case 1: {
        changeSlide(1, targetSlide);
        nextSlide = 2;
        break;
      }
      case 2: {
        changeSlide(2, targetSlide);
        nextSlide = 0;
        break;
      }
    }
  }
  sliderNavigation.forEach((slideNav: HTMLElement) => {
    slideNav.addEventListener('click', () => {
      const navNum = Number(slideNav.dataset.nav);
      clearInterval(timerDuration)
      nextSlide = navNum;
      if (navNum !== activeSlide) {
        if ((navNum < activeSlide)) {
          updateSlide("previous");
        } else {
          updateSlide();
        }
      }
    })
  });

  function changeSlide(currentSlide: number, targetSlide?: TargetSlide) {
    // debugger
    const style = new Style();
    sliderNavigation.forEach((nav: HTMLElement) => {
      anime({
        targets: nav,
        transitionDuration: '50',
        opacity: '0.75',
        backgroundColor: 'rgba(249, 249, 249, 0)'
      })
      if(nav.isEqualNode(sliderNavigation[currentSlide])) {
        anime({
          targets: nav,
          transitionDuration: '250',
          opacity: '1',
          backgroundColor: 'rgba(249, 249, 249, 1)'
        })
      }
    });
    slides.forEach((slide: HTMLElement) => {
      switch(targetSlide) {
        default : case "next": {
          style.setCSS(slide, {
            zIndex: '5'
          });
          anime({
            targets: slide,
            transitionDuration: '300',
            easing: 'easeOutQuint',
            left: '-100%'
          });
          style.setCSS(slide, {
            left: '100%'
          });
          if (slide.isEqualNode(slides[currentSlide])) {
            style.setCSS(slide, {
              zIndex: '60'
            })
            anime({
              targets: slide,
              easing: 'easeOutQuint',
              transitionDuration: '500',
              left: '0'
            })
          }

          break;
        }
        case "previous": {
          style.setCSS(slide, {
            zIndex: '5',
            left: '0',
          });
          anime({
            targets: slide,
            transitionDuration: '1300',
            easing: 'easeOutQuint',
            right: '-100%'
          });
          style.setCSS(slide, {
            right: '100%'
          });
          if(slide.isEqualNode(slides[currentSlide])){
            style.setCSS(slide, {
              zIndex: '60',
            })
            anime({
              targets: slide,
              easing: 'easeOutQuint',
              transitionDuration: '500',
              left: '0'
            })
          } else {
            style.setCSS(slide, {
              left: '100%'
            })
          }

          break;
        }
      }
    });
  }
}
