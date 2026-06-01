const page = {
  init() {
    this.themeToggle();
    this.portfolio();
  },
  themeToggle() {
    const html = document.documentElement;
    const toggleBtn = document.querySelector(".theme-toggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
      toggleBtn.textContent = savedTheme === "dark" ? "Light" : "Dark";
    }

    toggleBtn.addEventListener("click", () => {
      const theme = html.getAttribute("data-theme");
      const next = theme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggleBtn.textContent = next === "dark" ? "Light" : "Dark";
    });
  },
  portfolio() {
    // Main Portfolio Tab Change
    const tabs = document.querySelectorAll(".portfolio__main-tab");
    const tabItems = document.querySelectorAll(".portfolio__main-item");

    tabItems.forEach((tabItem, index) => {
      tabItem.classList.toggle("is-active", index === 0);
    });
    tabs.forEach((tab, index) => {
      tab.classList.toggle("is-active", index === 0);
    });

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");

        tabItems.forEach((tabItem) => tabItem.classList.remove("is-active"));
        tabItems[index].classList.add("is-active");
      });
    });

    // Widget Portfolio Show More
    const showMoreBtn = document.querySelector(".portfolio__widget-more");
    const widgetItems = document.querySelectorAll(".portfolio__widget-item");

    const showCount = 3;
    let visibleCount = showCount;

    widgetItems.forEach((widgetItem, index) => {
      if (index < showCount) {
        widgetItem.classList.add("is-active");
      }
    });

    showMoreBtn.addEventListener("click", () => {
      visibleCount += showCount;

      widgetItems.forEach((widgetItem, index) => {
        if (index < visibleCount) {
          widgetItem.classList.add("is-active");
        }
        if (visibleCount >= widgetItems.length) {
          showMoreBtn.style.display = "none";
        }
      });
    });
  },
};
page.init();
