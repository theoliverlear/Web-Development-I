// Oliver Sigwarth
// CIDS 225 - Web Development I
// Assignment Three | Hobby Showcase
// * The objective of this assignment is to demonstrate your proficiency in
// * HTML and CSS by creating a personal website.
// Created: 8/6/2023
// Last Modified: 8/11/2023
//==========================-Stable-Anchors-Section-==========================
// The following code prevents the user from dragging the anchors on the page.
// The anchors array is declared by collecting all anchor elements on the
// page. Then, a for loop iterates through the array and adds an event
// listener which prevents its default action when the user drags the anchor.
// The same process is applied to images.
let anchors = document.getElementsByTagName('a');
for (let anchor of anchors) {
    anchor.addEventListener('dragstart', function (dragEvent) {
        dragEvent.preventDefault();
    });
}
let images = document.getElementsByTagName('img');
for (let image of images) {
    image.addEventListener('dragstart', function (dragEvent) {
        dragEvent.preventDefault();
    });
}