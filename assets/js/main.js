const slider = new Swiper(".chev-slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
    disabledClass: "button-disabled",
  },
});

// tab content

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    // remove class active
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// set menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menuNavigation = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  const visability = menuNavigation.getAttribute("data-visible");
  if (visability === "false") {
    menuNavigation.setAttribute("data-visible", true);
    menuToggle.setAttribute("aria-expanded", true);
  } else if (visability === "true") {
    menuNavigation.setAttribute("data-visible", false);
    menuToggle.setAttribute("aria-expanded", false);
  }
});

// set function images

function imagesBox(images) {
  const bigImages = document.querySelector(".big-images");
  bigImages.src = images.src;
}

// scroll sticky navigation

const stickyNavigation = document.querySelector("#scroll-navigation");

window.addEventListener("scroll", () => {
  stickyNavigation.classList.toggle("active", this.scrollY > 20);
});

// set darkmode

const html = document.querySelector("html");
const btnDarkMode = document.querySelector(".btn-header .toggle-darkmode");

btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.toggle("changes");
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
  } else {
    html.dataset.colorMode = "light";
  }
});

// set darkmode mobile

const btnDarkModeMobile = document.querySelector(
  ".btn-header-mobile .toggle-darkmode"
);

btnDarkModeMobile.addEventListener("click", () => {
  btnDarkModeMobile.classList.toggle("changes");
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
  } else {
    html.dataset.colorMode = "light";
  }
});
