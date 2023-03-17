export function filter() {
  setTimeout(() => {
    const filterContainer = document.querySelector(".project-filter");

    setTimeout(() => {
      let galleryItems = document.querySelectorAll(".project-filter-item");

      filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("project-item")) {
          // deactivate existing active 'filter-item'
          filterContainer.querySelector(".active").classList.remove("active");
          // activate new 'filter-item'
          event.target.classList.add("active");
          const filterValue = event.target.getAttribute("data-filter");

          galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
              item.classList.remove("hide");
              item.classList.add("show");
            } else {
              item.classList.remove("show");
              item.classList.add("hide");
            }
          });
        }
      });
    }, 1500);
  }, 600);
}
