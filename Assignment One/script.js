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
// Last Modified: 6/8/2023
let anchors = document.getElementsByTagName('a');
for (let anchor of anchors) {
    anchor.addEventListener('dragstart', function (dragEvent) {
        dragEvent.preventDefault();
    });
}