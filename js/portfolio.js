document.addEventListener('DOMContentLoaded', function() {
    // Wait for jQuery to load
    const checkJQuery = setInterval(function() {
        if (window.jQuery) {
            clearInterval(checkJQuery);
            initializeGallery();
        }
    }, 100);

    function initializeGallery() {
        // Initialize Justified Gallery
        $("#justified-gallery").justifiedGallery({
            rowHeight: 300,
            margins: 10,
            lastRow: 'nojustify',
            captions: false,
            border: 0,
            selector: '.gallery-item:not(.hidden)'
        });

        // Portfolio filtering
        const categoryTabs = document.querySelectorAll('.category-tab');
        const galleryItems = document.querySelectorAll('.gallery-item');

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const category = tab.dataset.category;

                // Filter gallery items and prepare for re-layout
                let visibleCount = 0;
                galleryItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.classList.remove('hidden');
                        item.style.display = '';
                        visibleCount++;
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });

                // Force layout recalculation
                $("#justified-gallery").justifiedGallery('destroy');

                // Re-initialize with only visible items
                $("#justified-gallery").justifiedGallery({
                    rowHeight: 300,
                    margins: 10,
                    lastRow: 'nojustify',
                    captions: false,
                    border: 0,
                    selector: '.gallery-item:not(.hidden)'
                });
            });
        });

        // Configure Lightbox2
        lightbox.option({
            'resizeDuration': 300,
            'wrapAround': true,
            'albumLabel': 'Slika %1 od %2',
            'fadeDuration': 300,
            'positionFromTop': 100,
            'showImageNumberLabel': false,
            'fitImagesInViewport': true,
            'maxWidth': 2000,
            'maxHeight': 2000
        });

        // Ensure images load properly
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.onload = function() {
                this.style.opacity = 1;
            };

            if (img.complete) {
                img.style.opacity = 1;
            } else {
                img.style.opacity = 0;
            }
        });
    }
});