import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

searchForm();
mobileMenu();
newArrivals();

function searchForm(){
    $('.navUser-links-search').on('click', (event) => {
        event.preventDefault();
        if ($('.search-form').hasClass('is-open')) {
            $('.search-form').removeClass('is-open');
        } else {
            $('.search-form').addClass('is-open');
        }
    });
    
    // close search.
    $(document).mouseup(function(event) {
        if ($(event.target).closest("div.search-form").length === 0) {
            $('.search-form').removeClass('is-open');
        } 
    });
}

function mobileMenu() {
    // lock screen when mobile menu open.
    $('[data-toggle="offCanvasLeft"]').on('click', (event) => {
        $('html').addClass('lock-screen');
    })
    
    $('.off-canvas [data-close]').on('click', (event) => {
        $('html').removeClass('lock-screen');
    })
}

function newArrivals() {
    var slider = tns({
        container: '.new-arrivals-slider .grid-x',
        items: 2,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        controls: true,
        responsive: {
            551: {
                items: 2,
            },
            
            851: {
                items: 3,
            },
            
            1001: {
                items: 4,
            }
        }
      });
}
