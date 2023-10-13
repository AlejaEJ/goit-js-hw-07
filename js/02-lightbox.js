import { galleryItems } from './gallery-items.js';
// Change code below this line

const createItem = (item) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`;
};

const itemsContainer = document.querySelector('.gallery');
for (const item of galleryItems) {
    const newItem = createItem(item);
    itemsContainer.innerHTML += newItem; 
}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


