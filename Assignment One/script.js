// Oliver Sigwarth
// CIDS 225 - Web Development I
// Assignment One | HTML Showcase
/*
 * In this project, you will create a webpage using HTML to showcase items
 * that hold personal meaning to you. Each item will be accompanied by a
 * picture and a description, allowing you to express the significance and
 * stories behind them.
 */
// Created: 6/6/2023
// Last Modified: 6/16/2023

//==========================-Stable-Anchors-Section-==========================
// The following code prevents the user from dragging the anchors on the page.
// The anchors array is declared by collecting all anchor elements on the
// page. Then, a for loop iterates through the array and adds an event
// listener which prevents its default action when the user drags the anchor.
let anchors = document.getElementsByTagName('a');
for (let anchor of anchors) {
    anchor.addEventListener('dragstart', function (dragEvent) {
        dragEvent.preventDefault();
    });
}
//=============================-Slideshow-Section=============================
// The slideshowArrow holds the arrow image that can be clicked to scroll
// through the images. The libraryPictures array is declared and initialized
// with the paths to the images which will be scrolled through. The
// libraryPicture holds the image element that will be scrolled through. The
// currentPictureIndex is where in the index of the array of libraryPictures
// is currently at. The isForward boolean is used to determine if the program
// is moving forward or backward based on whether the beginning or the end of
// the array has been reached.
let slideshowArrow = document.getElementById('slideshow-arrow');
const libraryPictures = [
    "images/library/java.jpeg",
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
//----------------------------Scroll-Picture-Function-------------------------
function scrollPicture() {
    // The scrollPicture() function is called when the user clicks on the 
    // arrow next to the slideshow. The function checks if program is moving 
    // forward or backward. If the program is moving forward, the function 
    // increments the index of the current picture. Then, the function checks
    // if the currentPictureIndex is at the end of the array. If it is, the 
    // function sets isFoward to false and prepares the program to move 
    // backward. If the program is moving backward, the function decrements 
    // the index of the current picture. Conversely, the function checks if 
    // the index is at the beginning of the array. If it is, the function sets
    // isForward to true and prepares the program to move forward. Finally,
    // the function sets the source of the image to the corresponding index
    // item in the libraryPictures array.
    if (isForward) {
        currentPictureIndex++;
        if (currentPictureIndex === libraryPictures.length - 1) {
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

//=========================-Show-Hide-Text-Section============================
// The isHidden variable is used to determine if the text is hidden or not.
// The showMoreButton holds the text, acting as a button, that can be clicked
// to show the hidden text. The showLessButton holds the text, acting as a
// button, that can be clicked to hide the text. The hiddenText array holds
// all text that may be hidden.
let isHidden = true;
let showMoreButton = document.getElementById('show-more');
let showLessButton = document.getElementById('show-less');
let hiddenText = document.getElementsByClassName('hidden-text');
//------------------------Show-More-Show-Less-Functions-----------------------
function showMore() {
    // The showMore() function is called when the user clicks on the
    // showMoreButton which, if the text isHidden, shows the hidden text by
    // looping through all the hidden text in the hiddenText array and setting
    // all hidden text to be displayed using the inline property. Since the
    // text is revealed, isHidden is set to false.
    if (isHidden) {
        for (let text of hiddenText) {
            text.style.display = "inline";
        }
        isHidden = false;
    }
}
function showLess() {
    // The showLess() function is called when the user clicks on the
    // showLessButton which, if the text is not hidden, hides the text by
    // looping through all the hidden text in the hiddenText array and setting
    // all hidden text to be hidden using the none property. Since the text is
    // hidden, isHidden is set to true.
    if (!isHidden) {
        for (let text of hiddenText) {
            text.style.display = "none";
        }
        isHidden = true;
    }
}
// The showMoreButton is assigned the showMore() function when it is clicked
// and the showLessButton is assigned the showLess() function when it is
// clicked as well.
showMoreButton.addEventListener('click', showMore);
showLessButton.addEventListener('click', showLess);