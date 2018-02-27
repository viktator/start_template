$(function () {



    //form validation
    var regex = {

        name: /^[a-z ,.'-]+$/i,
        email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    };

    $.each($('#form input'), function () {

        $(this).on('focusout', function () {

            if (!regex[$(this).attr('name')].test($(this).val())) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
    });
    // .menu fixed

    var headerPos, winPos, section0;
    section0 = $('.section0').outerHeight(true);

    headerPos = $('.header').offset().top;

    $(window).scroll(function () {
        winPos = $(window).scrollTop();

        if (winPos >= section0) {
            $('.header').addClass('fixed').css({background: '#1C2937'});
        } else {
            $('.header').removeClass('fixed').css({background: ''});
        }
    });
    //      slow  scrolling

    $('.menu a').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        $('html').animate({scrollTop: destination}, 1100);

        return false;
    });

});

//   line

$(function () {
    $('.menu a').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            li = $this.closest('li');
        li.addClass('blue_line_active').siblings().removeClass('blue_line_active');
    })
});

$(function () {

    //  tabs
    $('.tabs_control a').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('li'),
            item_content = $('.gallery_photo'),
            itemPos = item.data('class');


        item_content.filter('.gallery_photo_' + itemPos).addClass('tabs_control_active').siblings().removeClass('tabs_control_active');
        item.addClass('tab_active').siblings().removeClass('tab_active');
    })
});

$(function () {
    //   amnimated.js libery
    //animation h2

    $(window).on('scroll', function () {
         var elems = [
             { cls: '.mov', animationType: 'bounceInLeft'},
             { cls: '.mov1', animationType: 'bounceInLeft'},
             { cls: '.mov2', animationType: 'bounceInLeft'},
             { cls: '.mov3', animationType: 'bounceInLeft'},
             { cls: '.mov4', animationType: 'bounceInLeft'},
             { cls: '.text_column', animationType: 'fadeInUp'},
             { cls: '.btn', animationType: 'tada'},
             { cls: '.right', animationType: 'bounceInRight'},
             { cls: '.man_pic li', animationType: 'fadeInUp'},
             { cls: '.left', animationType: 'bounceInLeft'},
             { cls: '.gallery_menu li', animationType: 'slideInUp'},
             { cls: '.sec5_img', animationType: 'zoomIn'},
             { cls: '.social_sign', animationType: 'bounceInDown'},

         ]


        elems.forEach(function (e) {
            var $current = $(e.cls),
                top,
                topWin;
            if ($current.offset() !== undefined) {
                top = $current.offset().top;
                topWin = $(window).scrollTop();
                (top < topWin + 600) && $current.addClass(e.animationType);
            }
        })

    })
})