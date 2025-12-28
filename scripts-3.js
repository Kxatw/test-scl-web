document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);
            const img = document.createElement('img');
            img.src = item.src;
            lightbox.appendChild(img);
            lightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
        });
    });
});
