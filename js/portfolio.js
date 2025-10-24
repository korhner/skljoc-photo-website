// PhotoSwipe Initialization and Filtering
document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const galleryElement = document.getElementById('gallery');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Initialize PhotoSwipe with global UMD objects
    if (typeof PhotoSwipeLightbox !== 'undefined') {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            arrowPrev: true,
            arrowNext: true,
            counter: true,
            zoom: true,
            escKey: true,
            close: true,
            click: true,
            bgOpacity: 0.8,
            showHideAnimationType: 'fade',
            pswpModule: PhotoSwipe
        });

        // Initialize PhotoSwipe
        lightbox.init();

        // Make it globally available
        window.photoswipeLightbox = lightbox;
    } else {
        console.error('PhotoSwipe not loaded correctly');
    }

    // Set up category filtering
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Get category
            const category = tab.dataset.category;

            // Filter items
            filterGallery(category);
        });
    });

    // Filter gallery items by category
    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = '';
                fadeIn(item);
            } else {
                fadeOut(item);
            }
        });
    }

    // Fade in animation
    function fadeIn(element) {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease';
            element.style.opacity = '1';
        }, 10);
    }

    // Fade out animation
    function fadeOut(element) {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }
});