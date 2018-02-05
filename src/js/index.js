



$(function () {



                          //form validation
    var regex = {

        name: /^[a-z ,.'-]+$/i,
        email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
    };

    $.each($('#form input'), function() {

        $(this).on('focusout', function() {

            if(!regex[$(this).attr('name')].test($(this).val())) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
    });
                     //    .fixed menu

    var headerPos, winPos, section0;
        section0 = $('.section0').outerHeight(true);

   headerPos = $('.header').offset().top;

   $(window).scroll(function() {
       winPos = $(window).scrollTop();

       if( winPos >= section0 ) {
           $('.header').addClass('fixed').css({background: '#1C2937'});
       } else {
           $('.header').removeClass('fixed').css({background: ''});
       }
   })
                     //      slow  scrolling

        $('.menu a').click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;

            $('html').animate( { scrollTop: destination }, 1100 );

            return false;
    });

});

                              //   line

    $(function() {
        $('.menu a').on('click', function(e) {
             e.preventDefault();

            var $this = $(this),
            li = $this.closest('li');
            li.addClass('blue_line_active').siblings().removeClass('blue_line_active');
    })
})

$(function() {

                                   //  tabs
  $('.tabs_control a').on('click', function(e) {
            e.preventDefault();

      var $this = $(this),
          item = $this.closest('li'),
          item_content = $('.gallery_photo'),
          itemPos = item.data('class');


      item_content.filter('.gallery_photo_' + itemPos ).addClass('tabs_control_active').siblings().removeClass('tabs_control_active');
      item.addClass('tab_active').siblings().removeClass('tab_active');
  })
})

    $(function () {
         //   amnimated.js libery
         //animation h2

         $(window).on('scroll', function() {
            $('.mov').each(function() {
                var elem = $(this).offset().top;
                var topWin =  $(window).scrollTop();

                if(elem < topWin + 600) {
                    $('.mov').addClass('bounceInLeft');
                }
            })

        })


        $(window).on('scroll', function() {
            $('.mov1').each(function() {
                var elem = $(this).offset().top;
                var topWin =  $(window).scrollTop();

                if(elem < topWin + 600) {
                    $('.mov1').addClass('bounceInLeft');
                }
            })

        })

        $(window).on('scroll', function() {
            $('.mov2').each(function() {
                var elem = $(this).offset().top;
                var topWin =  $(window).scrollTop();

                if(elem < topWin + 600) {
                    $('.mov2').addClass('bounceInLeft');
                }
            })

        })

        $(window).on('scroll', function() {
            $('.mov3').each(function() {
                var elem = $(this).offset().top;
                var topWin =  $(window).scrollTop();

                if(elem < topWin + 600) {
                    $('.mov3').addClass('bounceInLeft');
                }
            })

        })

        $(window).on('scroll', function() {
            $('.mov4').each(function() {
                var elem = $(this).offset().top;
                var topWin =  $(window).scrollTop();

                if(elem < topWin + 600) {
                    $('.mov4').addClass('bounceInLeft');
                }
            })

        })


        $(window).on('scroll', function() {
            $('.text_column').each(function() {
                var elem = $(this).offset().top;
                 var winPos = $(window).scrollTop();

                 if (elem < winPos + 600) {
                $('.text_column').addClass('fadeInUp');
            }
        })
    })

    $(window).on('scroll', function() {
        $('.man_pic li').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 600) {
                $('.man_pic li').addClass('fadeInUp');
            }
        })
    })

    $(window).on('scroll', function() {
        $('.btn').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 600) {
                $('.btn').addClass('tada');
            }
        })
    })

    $(window).on('scroll', function() {
        $('.right').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 600) {
                $('.right').addClass('bounceInRight');
            }
        })
    })

    $(window).on('scroll', function() {
        $('.left').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();
console.log(elem)
            if (elem < winPos + 600) {
                $('.left').addClass('bounceInLeft');
            }
        })
    })

    $(window).on('scroll', function() {
        $('.gallery_menu li').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 600) {
                $('.gallery_menu li').addClass('slideInUp');
            }
        })
    })


    $(window).on('scroll', function() {
        $('.sec5_img').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 500) {
                $('.sec5_img').addClass('zoomIn');
            }
        })
    })


    $(window).on('scroll', function() {
        $('.social_sign').each(function() {
            var elem = $(this).offset().top;
            var winPos = $(window).scrollTop();

            if (elem < winPos + 600) {
                $('.social_sign').addClass('bounceInDown');
            }
        })
    })


})