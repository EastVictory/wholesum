export function useCarousel() {
  const handleCustomCarousel = (carouselId: string) => {
    const carouselPrevBtn = document.querySelector(".slider-controls__prev");
    const carouselNextBtn = document.querySelector(".slider-controls__next");
    const carousel = document.querySelector(carouselId);
    const carouselItems = carousel?.querySelectorAll(".feature-circle");
    const carouselItem = (carouselItems?.length && carouselItems[0]) || null;
    const firstItem = carouselItem;
    const lastItem = carouselItems[carouselItems.length - 1];
    const scrollWidth =
      (carouselItem && (carouselItem as HTMLElement).offsetWidth) || 360;
    const disableIntersectionHandling = false;
    const intersectionObserver = (_entry, button: HTMLElement | null) =>
      new IntersectionObserver(
        (entry) =>
          handleIntersection(entry, button, disableIntersectionHandling),
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

    carouselPrevBtn?.addEventListener("click", () => {
      if (!carousel) return;
      carousel.scrollLeft -= scrollWidth;
    });
    carouselNextBtn?.addEventListener("click", () => {
      if (!carousel) return;
      carousel.scrollLeft += scrollWidth;
    });

    intersectionObserver(firstItem, carouselPrevBtn).observe(firstItem);
    intersectionObserver(lastItem, carouselNextBtn).observe(lastItem);
  };

  const handleIntersection = (
    entries,
    controlButton,
    disableIntersectionHandling
  ) => {
    if (disableIntersectionHandling) {
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controlButton.setAttribute("disabled", true);
        controlButton.classList.add("disabled");
      } else {
        const isInitialization = entry.intersectionRatio === 0;
        if (!isInitialization) {
          controlButton.classList.remove("disabled");
          controlButton.removeAttribute("disabled");
        }
      }
    });
  };
  return { handleCustomCarousel };
}
