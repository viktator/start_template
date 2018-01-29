// $(document).ready(function() {
//
//     var form = $('#form');
//
//     form.on('submit', function(e) {
//         e.preventDefault();
//         var name = $('.name').val();
//         var email = $('.mail').val();
//         var nameReg = /^[a-z ,.'-]+$/i;
//         var emailReg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
//         if(!nameReg.test(name)) {
//             $('.name').addClass("name_error");
//         } else if (!emailReg.test(email)) {
//             $('.mail').addClass("mail_error");
//         }else {
//             $('.name').removeClass('name_error');
//             $('.mail').removeClass('mail_error');
//             $('.name').reset().val('');
//         }
//
//         // } || emailReg.test(email)) {
//         //     console.log('error');
//         // } else {
//         //     console.log('sucsess');
//         // }
//
//     })
// })
//
//

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
           $('.header').addClass('fixed');
       } else {
           $('.header').removeClass('fixed');
       }
   })
//   плавные якоря

    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;

            $('html').animate( { scrollTop: destination }, 1100 );

        return false;
    });

});