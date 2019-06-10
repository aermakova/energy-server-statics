$(".show-password").on('click',function() {
    const $input = $(".password");
    if ($input.attr('type') === 'password') {
        $input.attr('type', 'text');
    } else {
        $input.attr('type', 'password');
    }
});

// var clogin = $("#invest-login-tab");
// var cregister = $("#invest-registr-tab");
// /* display the register page */
// $("#invest-registr-nav").on("click", function(e){
//     e.preventDefault();
//     var newheight = cregister.height();
//     $("#invest-tabContent").stop().animate({
//         "height": newheight+"px"
//     }, 550);
// });
//
// /* display the login page */
// $("#invest-login-nav").on("click", function(e){
//     e.preventDefault();
//     var newheight = clogin.height();
//     $("#invest-tabContent").stop().animate({
//         "height": newheight+"px"
//     }, 550);
// });