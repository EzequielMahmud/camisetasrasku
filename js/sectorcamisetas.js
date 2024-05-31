document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.img-camisetas-chiquita');
    const mainImg = document.getElementById('main-img');
    const originalSources = Array.from(thumbnails).map(thumbnail => thumbnail.src);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function(e) {
            e.preventDefault();

            // cambiar img grande por la img seleccionada
            const tempSrc = mainImg.src;
            mainImg.src = thumbnail.src;
            thumbnail.src = tempSrc;

            // mantener pos original de las fotos chiquitas
            thumbnails.forEach((thumb, i) => {
                thumb.src = originalSources[i];
            });
        });
    });
});