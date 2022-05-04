// Menu Icon & Logo
var mm_tog_white = 'images/icon/menu-toggle-w.png';
var mm_tog_black = 'images/icon/menu-toggle-b.png';
var mm_logo_white = 'images/logo-w.png';
var mm_logo_black = 'images/logo-b.png';

$(document).ready(function () {
    $("#mm-open").click(function () {
        // Logo Image Change
        if ($("#head-logo img").attr('src') === mm_logo_white) {
            $("#head-logo img").attr('src', mm_logo_black);
        } else {
            $("#head-logo img").attr('src', mm_logo_white)
        }
        // Toggle Icon Change
        if ($("#mm-open img").attr('src') === mm_tog_white) {
            $("#mm-open img").attr('src', mm_tog_black);
        } else {
            $("#mm-open img").attr('src', mm_tog_white)
        }
        // MM Menu Open
        $("#mm-menu").toggleClass("active");
    })
});

// Menu Toggle
$("#mobile-menu-toggle").on('click', function () {
    $('#mobile-menu').toggleClass("active");
});

// Smooth Scroll
$('.scroll')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

// Company Logo Slider
$('.company-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// Benefits Slider
$('.benefits-slider').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
            margin: 10,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
});

// Dropdown
$("#task-drp").click(function () {
    $("#create-drp").toggleClass("show");
});

// Datepicker
$(function () {
    $(".datepicker1").datepicker({
        showOn: "button",
        buttonImage: "plugins/jquery-ui/images/pencil.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $(".datepicker1").datepicker("setDate", new Date());
});
$(document).ready(function () {
    $(".datepicker2").datepicker({
        showOtherMonths: true,
        minDate: 0,
        prevText: '<i class="fa fa-fw fa-angle-left"></i>',
        nextText: '<i class="fa fa-fw fa-angle-right"></i>',
    });
});

// Feeling Slider
$(function () {
    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 7,
        value: 4,
        step: 1,
        slide: function (event, ui) {
            $(this).find('div.bg-1').removeClass('left-color-1').removeClass('left-color-2').removeClass('left-color-3').removeClass('left-color-4').removeClass('left-color-5').removeClass('left-color-6').removeClass('left-color-7');
            $(this).find('div.bg-2').removeClass('right-color-1').removeClass('right-color-2').removeClass('right-color-3').removeClass('right-color-4').removeClass('right-color-5').removeClass('right-color-6').removeClass('right-color-7');

            img = 'images/clipart/emoji/' + ui.value + '.png';
            $(this).find('.ui-slider-handle').css({
                "background-image": "url(" + img + ")"
            });
            $(this).find('div.bg-1').addClass("left-color-" + ui.value);
            $(this).find('div.bg-2').addClass("right-color-" + ui.value);
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#slider-range-max").slider("value"));
});

// Radio Image Change
$(document).ready(function () {
    const desktop_images = ["images/home/workspace/1.png",
        "images/home/workspace/2.png",
        "images/home/workspace/3.png",
        "images/home/workspace/4.png"
    ];

    const mobile_images = ["images/home/workspace/1m.png",
        "images/home/workspace/2m.png",
        "images/home/workspace/3m.png",
        "images/home/workspace/4m.png"
    ];

    $('input[name=workspace]').change(function () {
        var index = $(this).attr("data-index");
        $("#image_desktop").attr("src", desktop_images[index]);
        $("#image_mobile").attr("src", mobile_images[index]);
    });
});

// Selectbox Icon
$('#assign1').IconSelectBox(true);
$('#todo-select').IconSelectBox(false);

// Text Editor
var textarea = document.getElementById('example');
sceditor.create(textarea, {
    toolbar: 'bold,italic,bulletlist,orderedlist,emoticon,link,image',
});