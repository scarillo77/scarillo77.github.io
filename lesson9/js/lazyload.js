//gets all the images with a "data-src" attribute into an array called "imagesToLoad"
const imagesToLoad = document.querySelectorAll('img[data-src]');

//sets... some... options? Like how far the images should be from the screen before loading them.
const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

//function for switching the src value from the placeholder to the address stored in the data-src
const loadImages = (image) => {
    const src = image.getAttribute('data-src');
    if (!src) {
        return;
    }
    image.setAttribute('src', src);
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//if IntersectionObserver is supported, calls the loadImages function as the imgages enter the viewport.
//if not, calls the loadImages function for everything on the page, regardless of viewport or scrolling
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                loadImages(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    })
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}



// Another way to write the loadImagesfunction and its function call
/*
function loadImages(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = function() {
      image.removeAttribute('data-src');
    };
}

for (let i = 0; i < imagesToLoad.length; i++) {
    let img = imagesToLoad[i];
    loadImages(img);
}
*/