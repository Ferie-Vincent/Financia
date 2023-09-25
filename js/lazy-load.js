var images = document.querySelectorAll('.js-lazy-image');
var config = {
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '50px 0px',
    threshold: 0.01
};

// The observer for the images on the page
var observer = new IntersectionObserver(onIntersection, config);
$.each(images, function (index, image) {
    observer.observe(image);
});

function onIntersection(entries) {
    // Loop through the entries
    $.each(entries, function (index, entry) {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {

            // Stop watching and load the image
            observer.unobserve(entry.target);
            // preloadImage(entry.target);
        }
    });
}