import { galleryItems } from './gallery-items.js';
// Change code below this line

const createItem = (item) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="Image description"
      />
    </a>
  </li>`;
};

const itemsContainer = document.querySelector('.gallery');
for (const item of galleryItems) {
    const newItem = createItem(item);
    itemsContainer.innerHTML += newItem; 
}

itemsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('gallery__image')) {
        const source = e.target.dataset.source;
        const alt = e.target.getAttribute('alt');
        const modal = basicLightbox.create(
            `<img src="${source}" alt="${alt}" width="800" height="600">`
        );
        modal.show();
    }
});
