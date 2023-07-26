// Oliver Sigwarth
// CIDS 225 - Web Development I
// Assignment Two | Personal Portfolio
// * The objective of this assignment is to create a portfolio website that
// * showcases your skills and projects. You will use HTML to structure the
// * content and CSS to style and layout the website.
// Created: 7/9/2023
// Last Modified: 7/14/2023
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
// This section instantiates the objects needed for the slideshow. These
// arrows can be clicked to scroll through the images. Each array is declared
// and initialized with the paths to the images which will be scrolled
// through. The Img variables holds the image elements that will be scrolled
// through. The index variables are where in the index of the array the user
// is currently at. The isForward variables are used to determine if the given
// Img array is moving forward or backward depending on whether the beginning
// or the end of the array has been reached.
//-----------------------------Image-Variables--------------------------------
let certImg = document.getElementById('certificate-img');
let cTraderImg = document.getElementById('c-trader-img');
let cTraderAImg = document.getElementById('c-trader-analysis-img');
let ccImg = document.getElementById('cc-img');
let insulinPumpImg = document.getElementById('insulin-pump-img');
//-----------------------------Arrow-Variables--------------------------------
let certArrow = document.getElementById('cert-arrow');
let cTraderArrow = document.getElementById('c-trader-arrow');
let cTraderAArrow = document.getElementById('c-trader-analysis-arrow');
let ccArrow = document.getElementById('cc-arrow');
let insulinPumpArrow = document.getElementById('insulin-pump-arrow');

let arrows = [certArrow, cTraderArrow, cTraderAArrow, ccArrow,
    insulinPumpArrow];
//-----------------------------Slideshow-Arrays-------------------------------
const certPics = [
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
];
const cTraderPics = [
    "images/CryptoTrader/buy_asset.png",
    "images/CryptoTrader/command_query.png",
    "images/CryptoTrader/create_tables_1.png",
    "images/CryptoTrader/create_tables_2.png",
    "images/CryptoTrader/crypto_database_log.png",
    "images/CryptoTrader/crypto_trader_log.png",
    "images/CryptoTrader/currency_interval_thread.png",
    "images/CryptoTrader/currency_test.png",
    "images/CryptoTrader/database_constructor.png",
    "images/CryptoTrader/get_value_from_portfolio.png",
    "images/CryptoTrader/parse.png",
    "images/CryptoTrader/parse_data_point.png",
    "images/CryptoTrader/parse_json.png",
    "images/CryptoTrader/poll.png",
    "images/CryptoTrader/portfolio_asset_constructor.png",
    "images/CryptoTrader/sell_asset.png",
    "images/CryptoTrader/sql_portfolio_history.png",
];
const cTraderAPics = [
    "images/CryptoTraderAnalysis/btc_figure.png",
    "images/CryptoTraderAnalysis/db_connect.png",
    "images/CryptoTraderAnalysis/get_currency_codes.png",
    "images/CryptoTraderAnalysis/get_portfolio_profit.png",
    "images/CryptoTraderAnalysis/imports.png",
    "images/CryptoTraderAnalysis/methods_1.png",
    "images/CryptoTraderAnalysis/methods_2.png",
    "images/CryptoTraderAnalysis/methods_3.png",
    "images/CryptoTraderAnalysis/multiple_item_line_graph.png",
    "images/CryptoTraderAnalysis/multiple_item_portfolio_bar_graph.png",
    "images/CryptoTraderAnalysis/multiple_item_portfolio_line_graph.png",
    "images/CryptoTraderAnalysis/portfolio_profit_log.png",
    "images/CryptoTraderAnalysis/single_item_line_graph.png",
    "images/CryptoTraderAnalysis/single_item_portfolio_line_graph.png",
    "images/CryptoTraderAnalysis/value_increase_bar_figure.png",
    "images/CryptoTraderAnalysis/value_increase_figure.png",
];
const ccPics = [
    "images/CurrencyConverter/assign_data.png",
    "images/CurrencyConverter/choice_within_range.png",
    "images/CurrencyConverter/choose_option.png",
    "images/CurrencyConverter/currency_value.png",
    "images/CurrencyConverter/parse_data.png",
    "images/CurrencyConverter/retrieve_data.png",
    "images/CurrencyConverter/set_values.png",
    "images/CurrencyConverter/start_currency_converter.png",
    "images/CurrencyConverter/test_currency_converter.png",
    "images/CurrencyConverter/view_currencies.png",
    "images/CurrencyConverter/withdraw.png",
];
const insulinPumpPics = [
    "images/InsulinPump/bg_button.png",
    "images/InsulinPump/border_layout_and_panel.png",
    "images/InsulinPump/button_and_textfield.png",
    "images/InsulinPump/calc_1.png",
    "images/InsulinPump/canvas.png",
    "images/InsulinPump/delivery_screen.png",
    "images/InsulinPump/exit_button.png",
    "images/InsulinPump/global_variables.png",
    "images/InsulinPump/gui_constructor.png",
    "images/InsulinPump/insulin_pump_constructor.png",
    "images/InsulinPump/test_add_bs.png",
    "images/InsulinPump/view_history_and_bolus_wizard.png",
];
//----------------------------Index-Variables---------------------------------
let certIndex = 0;
let cTraderIndex = 0;
let cTraderAIndex = 0;
let ccIndex = 0;
let insulinPumpIndex = 0;
//---------------------------isForward-Variables------------------------------
let certIsForward = true;
let cTraderIsForward = true;
let cTraderAIsForward = true;
let ccIsForward = true;
let insulinPumpIsForward = true;
//----------------------------Scroll-Picture-Function-------------------------
function scrollPicture() {
    // The scrollPicture() function is called when the user clicks on an arrow
    // next to a slideshow. The function determines which set of variables to
    // use for the slideshow through the id of the arrow. Once determined, the
    // program checks whether it is going forwards or backwards. If it is
    // forwards, the image will increment the current index of the slideshow.
    // Then the function checks if the index is at the end of the array. If it
    // is, the function sets the isForward variable to false and prepares the
    // program to move backward. If the program is moving backwards, the
    // function decrements the current index of the slideshow. The function
    // checks if the index is at the beginning of the array. If it is, the
    // function sets the isForward variable to true and prepares the program
    // to move forward. Finally, the function sets the source of the image to
    // the corresponding index of its respective array.
    switch (this.id) {
        case "cert-arrow":
            if (certIsForward) {
                certIndex++;
                if (certIndex === certPics.length - 1) {
                    certArrow.src = "images/arrows/arrow_left.png";
                    certIsForward = false;
                }
            } else {
                certIndex--;
                if (certIndex === 0) {
                    certArrow.src = "images/arrows/arrow_right.png";
                    certIsForward = true;
                }
            }
            certImg.src = certPics[certIndex];
            break;
        case "c-trader-arrow":
            if (cTraderIsForward) {
                cTraderIndex++;
                if (cTraderIndex === cTraderPics.length - 1) {
                    cTraderArrow.src = "images/arrows/arrow_left.png";
                    cTraderIsForward = false;
                }
            } else {
                cTraderIndex--;
                if (cTraderIndex === 0) {
                    cTraderArrow.src = "images/arrows/arrow_right.png";
                    cTraderIsForward = true;
                }
            }
            cTraderImg.src = cTraderPics[cTraderIndex];
            break;
        case "c-trader-analysis-arrow":
            if (cTraderAIsForward) {
                cTraderAIndex++;
                if (cTraderAIndex === cTraderAPics.length - 1) {
                    cTraderAArrow.src = "images/arrows/arrow_left.png";
                    cTraderAIsForward = false;
                }
            } else {
                cTraderAIndex--;
                if (cTraderAIndex === 0) {
                    cTraderAArrow.src = "images/arrows/arrow_right.png";
                    cTraderAIsForward = true;
                }
            }
            cTraderAImg.src = cTraderAPics[cTraderAIndex];
            break;
        case "cc-arrow":
            if (ccIsForward) {
                ccIndex++;
                if (ccIndex === ccPics.length - 1) {
                    ccArrow.src = "images/arrows/arrow_left.png";
                    ccIsForward = false;
                }
            } else {
                ccIndex--;
                if (ccIndex === 0) {
                    ccArrow.src = "images/arrows/arrow_right.png";
                    ccIsForward = true;
                }
            }
            ccImg.src = ccPics[ccIndex];
            break;
        case "insulin-pump-arrow":
            if (insulinPumpIsForward) {
                insulinPumpIndex++;
                if (insulinPumpIndex === insulinPumpPics.length - 1) {
                    insulinPumpArrow.src = "images/arrows/arrow_left.png";
                    insulinPumpIsForward = false;
                }
            } else {
                insulinPumpIndex--;
                if (insulinPumpIndex === 0) {
                    insulinPumpArrow.src = "images/arrows/arrow_right.png";
                    insulinPumpIsForward = true;
                }
            }
            insulinPumpImg.src = insulinPumpPics[insulinPumpIndex];
            break;
    }
}
for (let arrow of arrows) {
    arrow.addEventListener('click', scrollPicture);
}
//----------------------------Highlight-Function------------------------------
// To emphasize the text to the user visually for assistance, a highlighter 
// via the cursor is added to highlight, embolden, and underline selected 
// words. This feature is only applied to the <p> elements. Each <p> element 
// is held in the pElements array. Each element of the array is looped through
// where the program can access the text. For each iteration, the words in the
// current pElement are saved in an array pWords. Each word is separated from 
// the text block by splitting the string with a space character delimiter.
// Next, to reassign the pElement, the map() method is used, as opposed to the
// void method forEach(), to both iterate over each word and assign each <p> a
// <span> of words which can be individually manipulated. Lastly, all the word
// <span> elements contained in the pElement are iterated though. Each word 
// has two event listeners. The first is a mouseover listener which will add 
// the highlight class and its styling to the given word when moused over. The
// class manipulation is performed with the add() and remove() functions for
// each classList. Lastly, the words are given a second event listener, 
// mouseoff, which, when the mouse moves off the word, removes the highlight 
// class and its styling from the word to return to its normal state.
const pElements = document.getElementsByTagName("p");
for (let pElement of pElements) {
    const pWords = pElement.innerHTML.split(' ');
    pElement.innerHTML = pWords.map(word =>
                               `<span class="word">${word}</span>`).join(' ');
    const words = document.getElementsByClassName('word');
    for (let word of words) {
        word.addEventListener('mouseover', function() {
            word.classList.add('highlight');
        });
        word.addEventListener('mouseout', function() {
            word.classList.remove('highlight');
        });
    }
}

