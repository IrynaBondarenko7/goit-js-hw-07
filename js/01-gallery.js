import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

//create div in which we place img
const imgElements = galleryItems
  .map((item) => {
    return `<div class="gallery-item"><a class="gallery-item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/></a></div>`;
  })
  .join("");

//put into DOM
galleryContainer.insertAdjacentHTML("beforeend", imgElements);

//delegation event
galleryContainer.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const imgSelected = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${imgSelected}" width="800" height="600">
`);
  instance.show();

  //create function closing escape key press
  galleryContainer.addEventListener("keydown", onEscapePress);

  function onEscapePress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

/// Якщо робити списком
/*const imgElements = galleryItems
  .map((item) => {
    return `<li class="gallery-item"><a class="gallery-item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}"/></a></li>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  `<ul>` + imgElements + `</ul>`
);
*/
