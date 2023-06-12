// Oliver Sigwarth
// CIDS 225
// Assignment One | HTML Showcase
/*
 * In this project, you will create a webpage using HTML to showcase items
 * that hold personal meaning to you. Each item will be accompanied by a
 * picture and a description, allowing you to express the significance and
 * stories behind them.
 */
// Created: 6/6/2023
// Last Modified: 6/9/2023
let anchors = document.getElementsByTagName('a');
for (let anchor of anchors) {
    anchor.addEventListener('dragstart', function (dragEvent) {
        dragEvent.preventDefault();
    });
}
let slideshowArrow = document.getElementById('slideshow-arrow');
const libraryPictures = [
    "images/library/java.JPEG",
    "images/library/operating_systems.JPEG",
    "images/library/python.JPEG",
    "images/library/cybersecurity.JPEG",
    "images/library/web.JPEG",
    "images/library/c++.JPEG",
    "images/library/misc.JPEG"
];
let libraryPicture = document.getElementById('slideshow-image');
let currentPictureIndex = 0;
let isForward = true;
function scrollPicture() {
    if (isForward) {
        currentPictureIndex++;
        if (currentPictureIndex === libraryPictures.length - 1) { // this switches for the NEXT photo
            slideshowArrow.src = "images/arrows/arrow_left.png";
            isForward = false;
        }
    } else {
        currentPictureIndex--;
        if (currentPictureIndex === 0) {
            slideshowArrow.src = "images/arrows/arrow_right.png";
            isForward = true;
        }
    }
    libraryPicture.src = libraryPictures[currentPictureIndex];
}
slideshowArrow.addEventListener('click', scrollPicture);