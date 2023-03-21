import { FETCH_ITEMS_URL } from "./url.js";

export function fetchItems() {
  let row = document.querySelector("#projects");
  setTimeout(() => {
    fetch(FETCH_ITEMS_URL)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((result) => {
          let html = `<div class="project-filter-item ${result.filter}">
            <section class="overlay">
              <div class="gallery-item-inner">
                <img
                  src="${result.image}"
                  alt="image"
                />
              </div>
              <div class="about-project">
                <h3 class="about-title">${result.title}</h3>
                 <div class="links">
                 <a class="about-btn" href="${result.link}" target="_blank" >&#8599;</a>
                 <a class="git" href="${result.github}" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/null/github.png"/></a>
                 </div>
              </div>
            </section>
          </div>`;
          row.innerHTML += html;
        });
      });
  }, 500);
}
