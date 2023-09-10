export function useCarousel() {
  const handleCustomCarousel = (carouselId: string) => {
    const carouselPrevBtn = document.querySelector(".carousel-prev-btn");
    const carouselNextBtn = document.querySelector(".carousel-next-btn");
    const carousel = document.querySelector(carouselId);
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const carouselItem = (carouselItems.length && carouselItems[0]) || null;
    const firstItem = carousel.querySelector(".carousel-item:first-of-type");
    const lastItem = carousel.querySelector(".carousel-item:last-of-type");
    const scrollWidth =
      (carouselItem && (carouselItem as HTMLElement).offsetWidth) || 360;

    const disableIntersectionHandling = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const intersectionObserver = (entry, button) =>
      new IntersectionObserver(
        (entry) =>
          handleIntersection(entry, button, disableIntersectionHandling),
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

    carouselPrevBtn.addEventListener("click", () => {
      carousel.scrollLeft -= scrollWidth;
    });
    carouselNextBtn.addEventListener("click", () => {
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
