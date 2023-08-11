// Oliver Sigwarth
// CIDS 225 - Web Development I
// Assignment Three | Hobby Showcase
// * The objective of this assignment is to demonstrate your proficiency in
// * HTML and CSS by creating a personal website.
// Created: 8/6/2023
// Last Modified: 8/11/2023
//=============================-Slideshow-Section=============================
// The slideshowArrow holds the arrow image that can be clicked to scroll
// through the images. The libraryPictures array is declared and initialized
// with the paths to the images which will be scrolled through. The
// libraryPicture holds the image element that will be scrolled through. The
// currentPictureIndex is where in the index of the array of libraryPictures
// is currently at. The isForward boolean is used to determine if the program
// is moving forward or backward based on whether the beginning or the end of
// the array has been reached.
let slideshowArrow = document.getElementById('slide-arrow');
const libraryPictures = [
    "images/certificates/interactive_js_websites.png",
    "images/certificates/learn_bash_scripting.png",
    "images/certificates/learn_cpp.png",
    "images/certificates/learn_cpp_introduction_course.png",
    "images/certificates/learn_css.png",
    "images/certificates/learn_css_responsive_design.png",
    "images/certificates/learn_html.png",
    "images/certificates/learn_intermediate_java.png",
    "images/certificates/learn_javascript.png",
    "images/certificates/learn_navigation_design.png",
    "images/certificates/learn_python_3.png",
    "images/certificates/learn_the_basics_of_regular_expressions.png",
    "images/certificates/learn_the_command_line.png",
    "images/certificates/learn_sql.png"
];

let libraryPicture = document.getElementById('cert-img');
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
            slideshowArrow.src = "../../global-images/arrows/arrow_left.png";
            isForward = false;
        }
    } else {
        currentPictureIndex--;
        if (currentPictureIndex === 0) {
            slideshowArrow.src = "../../global-images/arrows/arrow_right.png";
            isForward = true;
        }
    }
    libraryPicture.src = libraryPictures[currentPictureIndex];
}
slideshowArrow.addEventListener('click', scrollPicture);