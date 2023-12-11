function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

function handleScroll() {
  const progressBars = document.querySelectorAll(".progress-bar__container");

  progressBars.forEach((bar) => {
    if (isInViewport(bar) && !bar.classList.contains("animate")) {
      bar.classList.add("animate");
      const progressBarItem = bar.querySelector(".progress-bar__item");
      const targetWidth = progressBarItem.getAttribute("data-bar");
      progressBarItem.style.width = `${targetWidth}%`;
      progressBarItem.innerHTML = `Processing ${targetWidth}%`;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  
});

// export function addScrollListener() {
//   window.addEventListener("scroll", handleScroll);
//   handleScroll();
// }